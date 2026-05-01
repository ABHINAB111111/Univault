import os
import re

output_dir = "src/pages"

for f in os.listdir(output_dir):
    if f.endswith('.jsx'):
        path = os.path.join(output_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
            
        # Replace HTML comments <!-- ... --> with {/* ... */}
        content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', content, flags=re.DOTALL)
        
        # Another common mistake: <circle ...></circle> or others with missing closing, but they are fine.
        # But wait! <svg viewBox="..."> needs viewBox!
        content = content.replace('viewbox', 'viewBox')

        with open(path, 'w', encoding='utf-8') as out_file:
            out_file.write(content)
        print(f"Fixed {f}")
