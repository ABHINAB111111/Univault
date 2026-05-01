import os
import re

output_dir = "src/pages"

for f in os.listdir(output_dir):
    if f.endswith('.jsx'):
        path = os.path.join(output_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # We previously generated things like <a class="..." to="/"> ... </Link>
        # We need to change <a to <Link for tags having that structure.
        
        # Replace <a followed by anything, containing to=", with <Link
        # A simple string replace since we only added `to=` to the ones we intended to turn to <Link>
        # Let's use regex that matches <a ... to=... >
        
        def link_fixer(match):
            attrs = match.group(1)
            # if we have 'to=' inside the attributes, it must be a Link
            if 'to=' in attrs:
                return f"<Link {attrs}>"
            return match.group(0)

        content = re.sub(r'<a\s+([^>]+)>', link_fixer, content)
        
        with open(path, 'w', encoding='utf-8') as out_file:
            out_file.write(content)
        print(f"Fixed Link tags in {f}")
