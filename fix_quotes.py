import re

with open('c:\\Programing codes\\app\\univault.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Remove double quotes around lucide icon attributes so they don't break onclick handlers
text = re.sub(r'<i data-lucide="([^"]+)"></i>', r'<i data-lucide=\1></i>', text)
text = re.sub(r'<i data-lucide="([^"]+)" fill="([^"]+)"></i>', r'<i data-lucide=\1 fill=\2></i>', text)

with open('c:\\Programing codes\\app\\univault.html', 'w', encoding='utf-8') as f:
    f.write(text)
