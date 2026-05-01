import os
import re

output_dir = "src/pages"

for f in os.listdir(output_dir):
    if f.endswith('.jsx'):
        path = os.path.join(output_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Inject import if not present
        if 'react-router-dom' not in content:
            content = content.replace("import React from 'react';", "import React from 'react';\nimport { Link, useNavigate } from 'react-router-dom';")

        # Function to replace anchor tags with semantic routing
        def replacer(match):
            a_tag = match.group(0)
            inner_text = match.group(2)
            
            to_path = "/"
            low_text = inner_text.lower()
            if 'lost &amp; found' in low_text or 'lost' in low_text:
                to_path = "/lost-found"
            elif 'rent' in low_text:
                to_path = "/rent"
            elif 'marketplace' in low_text:
                to_path = "/marketplace"
            elif 'profile' in low_text:
                to_path = "/profile"
            
            # replace <a> with <Link> and href="#" with to=to_path
            linked_tag = match.group(1).replace('href="#"', f'to="{to_path}"') + inner_text + "</Link>"
            return linked_tag

        # Find <a> tags: <a [attributes] href="#"> [content] </a>
        # Use regex to match <a>...</a>
        content = re.sub(r'(<a [^>]*href="#"[^>]*>)(.*?)</a>', replacer, content, flags=re.DOTALL)
        
        # Let's also wrap the cursor-pointer divs in buttons or add onClick? The user mentioned "make the buttoms clickable".
        # Let's add onClick="useNavigate()('/path')"... wait useNavigate must be a hook!
        # Instead, I'll insert a hook into the component, BUT that requires parsing the function.
        # It's easier to just change quick-action divs to Link tags if they look like buttons.
        # Quick commands have <p>Lost &amp; Found</p>
        
        with open(path, 'w', encoding='utf-8') as out_file:
            out_file.write(content)
        print(f"Updated routing for {f}")
