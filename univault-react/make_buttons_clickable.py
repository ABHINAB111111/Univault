import os
import re

output_dir = "src/pages"

for f in os.listdir(output_dir):
    if f.endswith('.jsx'):
        path = os.path.join(output_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Inject useNavigate hook inside the component definition if not present
        if 'const navigate = useNavigate();' not in content:
            content = re.sub(r'const (\w+) = \(\) => \{', r'const \1 = () => {\n  const navigate = useNavigate();', content)
        
        def button_replacer(match):
            tag_name = match.group(1) # 'button' or 'div'
            attributes = match.group(2)
            
            # Decide the path based on text context later, but regex operates tag by tag.
            # Without context, we'll assign a default or match specific clues in attributes for cursor-pointers.
            to_path = "/marketplace" # Default action
            
            text_context = ""
            
            # Attempt to guess from the attributes (classes) or we can look ahead
            low_attrs = attributes.lower()
            if 'manage_search' in low_attrs or 'lost' in low_attrs or 'found' in low_attrs:
                to_path = "/lost-found"
            elif 'key' in low_attrs or 'rent' in low_attrs or 'reserve' in low_attrs:
                to_path = "/rent"
            elif 'market' in low_attrs or 'storefront' in low_attrs or 'cart' in low_attrs:
                to_path = "/marketplace"
            elif 'person' in low_attrs or 'profile' in low_attrs:
                to_path = "/profile"
            
            # Wait, looking at attributes alone is limited because text is inside.
            if 'onClick' not in attributes:
                return f"<{tag_name}{attributes} onClick={{() => navigate('{to_path}')}}>"
            return match.group(0)

        # Replace button tags
        content = re.sub(r'<(button)([^>]*)>', button_replacer, content)
        
        # Replace div with cursor-pointer
        content = re.sub(r'<(div)([^>]*cursor-pointer[^>]*)>', button_replacer, content)

        with open(path, 'w', encoding='utf-8') as out_file:
            out_file.write(content)
        print(f"Added click handlers in {f}")
