import os

output_dir = "src/pages"

for f in os.listdir(output_dir):
    if f.endswith('.jsx'):
        path = os.path.join(output_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
            
        content = content.replace("style={{fontVariationSettings: 'FILL' 1,}}", "style={{fontVariationSettings: \"'FILL' 1\"}}")
        content = content.replace("style={{animation-delay: 250ms,}}", "style={{animationDelay: '250ms'}}")

        with open(path, 'w', encoding='utf-8') as out_file:
            out_file.write(content)
        print(f"Fixed styles in {f}")
