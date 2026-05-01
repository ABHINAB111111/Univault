import os
import re

html_dir = "html-screens"
output_dir = "src/pages"

os.makedirs(output_dir, exist_ok=True)

def html_to_jsx(html):
    # Extract just the <body ...> ... </body> content
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
    if not body_match:
        return ""
    
    body_content = body_match.group(1)
    
    # Quick string replacements for JSX
    jsx = body_content
    jsx = jsx.replace('class=', 'className=')
    jsx = jsx.replace('for=', 'htmlFor=')
    jsx = jsx.replace('stroke-width=', 'strokeWidth=')
    jsx = jsx.replace('stroke-linecap=', 'strokeLinecap=')
    jsx = jsx.replace('stroke-linejoin=', 'strokeLinejoin=')
    jsx = jsx.replace('fill-rule=', 'fillRule=')
    jsx = jsx.replace('clip-rule=', 'clipRule=')
    jsx = jsx.replace('fill-opacity=', 'fillOpacity=')
    jsx = jsx.replace('font-variation-settings=', 'style={{ fontVariationSettings:')
    
    # Add closing tags for images and inputs
    jsx = re.sub(r'(<img[^>]*?[^\/])>', r'\1 />', jsx)
    jsx = re.sub(r'(<input[^>]*?[^\/])>', r'\1 />', jsx)
    jsx = re.sub(r'(<br[^>]*?[^\/])>', r'\1 />', jsx)
    jsx = re.sub(r'(<hr[^>]*?[^\/])>', r'\1 />', jsx)
    
    # Fix style={{ fontVariationSettings: '...' }}
    jsx = re.sub(r'style={{ fontVariationSettings:\s*(.*?)\s*}}', lambda m: f"style={{{{ fontVariationSettings: {m.group(1)} }}}}" , jsx)

    # Convert inline styles: style="font-variation-settings: 'FILL' 1;"
    jsx = re.sub(r'style="([^"]*)"', lambda m: "style={{" + m.group(1).replace(';', ',').replace('font-variation-settings', 'fontVariationSettings') + "}}", jsx)
    
    return jsx

files = os.listdir(html_dir)
for f in files:
    if f.endswith('.html'):
        name_parts = f.replace('.html', '').split('-')
        component_name = ''.join(p.capitalize() for p in name_parts)
        
        with open(os.path.join(html_dir, f), 'r', encoding='utf-8') as file:
            content = file.read()
            
        jsx_content = html_to_jsx(content)
        
        react_component = f"""import React from 'react';

const {component_name} = () => {{
  return (
    <div className="bg-[#F3F1ED] font-dm-sans text-on-surface antialiased min-h-screen">
      {{/* Extracted from {f} */}}
      {jsx_content}
    </div>
  );
}};

export default {component_name};
"""
        with open(os.path.join(output_dir, component_name + '.jsx'), 'w', encoding='utf-8') as out_file:
            out_file.write(react_component)
        print(f"Generated {component_name}.jsx")
