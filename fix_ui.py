import re

with open('c:\\Programing codes\\app\\univault.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update Lucide CSS & Script
if 'unpkg.com/lucide' not in html:
    html = html.replace('</title>', '</title>\n<script src="https://unpkg.com/lucide@latest"></script>')

if '.lucide ' not in html:
    css_additions = """
.lucide { width: 1em; height: 1em; vertical-align: -0.125em; }
.nav-tab .ni { color: var(--txt3); font-size: 24px; }
.nav-tab.active .ni { color: var(--navy); }
</style>"""
    html = html.replace('</style>', css_additions)

if 'lucide.createIcons();' not in html:
    # We must insert it into the DOMContentLoaded block
    html = html.replace("document.addEventListener('DOMContentLoaded',()=>{", "document.addEventListener('DOMContentLoaded',()=>{ lucide.createIcons();")

# 2. Update Phone container CSS
html = html.replace("body{background:#1A1816;display:flex;justify-content:center;align-items:center;min-height:100vh;font-family:'DM Sans',sans-serif;overflow:hidden}", 
                    "body{background:#1A1816;display:flex;justify-content:center;align-items:center;height:100vh;font-family:'DM Sans',sans-serif;overflow:hidden;margin:0;padding:20px}")
html = html.replace("position:relative;width:393px;height:852px;background:var(--bg);border-radius:52px;overflow:hidden;",
                    "position:relative;width:100%;max-width:393px;height:100%;max-height:852px;background:var(--bg);border-radius:40px;overflow:hidden;")

# 3. Emoji replacements
emoji_map = {
    '🏠': '<i data-lucide="home"></i>',
    '🔍': '<i data-lucide="search"></i>',
    '🔄': '<i data-lucide="repeat"></i>',
    '🛍️': '<i data-lucide="shopping-bag"></i>',
    '👤': '<i data-lucide="user"></i>',
    '🔔': '<i data-lucide="bell"></i>',
    '➕': '<i data-lucide="plus"></i>',
    '🔴': '<i data-lucide="circle-alert"></i>',
    '🟢': '<i data-lucide="check-circle"></i>',
    '🔑': '<i data-lucide="key"></i>',
    '🎒': '<i data-lucide="backpack"></i>',
    '🎧': '<i data-lucide="headphones"></i>',
    '🔌': '<i data-lucide="plug"></i>',
    '💻': '<i data-lucide="laptop"></i>',
    '📚': '<i data-lucide="book"></i>',
    '🔧': '<i data-lucide="wrench"></i>',
    '🚲': '<i data-lucide="bike"></i>',
    '🔬': '<i data-lucide="microscope"></i>',
    '🎨': '<i data-lucide="palette"></i>',
    '🧮': '<i data-lucide="calculator"></i>',
    '📱': '<i data-lucide="smartphone"></i>',
    '⚽': '<i data-lucide="dribbble"></i>',
    '📦': '<i data-lucide="package"></i>',
    '🗑️': '<i data-lucide="trash"></i>',
    '⚠️': '<i data-lucide="alert-triangle"></i>',
    '📋': '<i data-lucide="clipboard-list"></i>',
    '🎁': '<i data-lucide="gift"></i>',
    '💬': '<i data-lucide="message-circle"></i>',
    '⏰': '<i data-lucide="clock"></i>',
    '✅': '<i data-lucide="check"></i>',
    '❌': '<i data-lucide="x"></i>',
    '🏷️': '<i data-lucide="tag"></i>',
    '⚖️': '<i data-lucide="scale"></i>',
    '🛡️': '<i data-lucide="shield"></i>',
    '📸': '<i data-lucide="camera"></i>',
    '📷': '<i data-lucide="camera"></i>',
    '✨': '<i data-lucide="sparkles"></i>',
    '👌': '<i data-lucide="thumbs-up"></i>',
    '🤝': '<i data-lucide="handshake"></i>',
    '⭐': '<i data-lucide="star"></i>',
    '🌟': '<i data-lucide="star"></i>',
    '🌙': '<i data-lucide="moon"></i>',
    '☀️': '<i data-lucide="sun"></i>',
    'ℹ️': '<i data-lucide="info"></i>',
    '📄': '<i data-lucide="file-text"></i>',
    '✏️': '<i data-lucide="edit-2"></i>',
    '🐛': '<i data-lucide="bug"></i>',
    '📍': '<i data-lucide="map-pin"></i>',
    '🏛️': '<i data-lucide="building"></i>',
    '💸': '<i data-lucide="banknote"></i>',
    '💰': '<i data-lucide="banknote"></i>',
    '🍽️': '<i data-lucide="utensils"></i>',
    '👋': '',
    '🚀': '',
    '🎉': '',
    '🕵️': '',
    '💪': '',
    '🏆': '<i data-lucide="award"></i>',
    '🧵': '<i data-lucide="pen-tool"></i>',
    '📢': '<i data-lucide="megaphone"></i>',
    '📧': '<i data-lucide="mail"></i>',
    '🔋': '<i data-lucide="battery"></i>',
    '●●●': '<i data-lucide="more-horizontal"></i>',
    '🤍': '<i data-lucide="heart"></i>',
    '❤️': '<i data-lucide="heart" fill="currentColor"></i>',
    '💔': '<i data-lucide="heart-crack"></i>',
    '⚡': '<i data-lucide="zap"></i>',
    '🤔': '<i data-lucide="help-circle"></i>',
    '😅': '',
    '🙏': '',
    '👍': '<i data-lucide="thumbs-up"></i>'
}

for emoji, replacement in emoji_map.items():
    html = html.replace(emoji, replacement)

# For any remaining high-surrogate emojis, strip them out to keep it clean, except some UI entities if needed
# We'll strip block U+1F000 to U+1F9FF which covers most of the emojis like smiles and objects
html = re.sub(r'[\U0001f000-\U0001f9ff]', '', html)

with open('c:\\Programing codes\\app\\univault.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Done replacing emojis and modifying CSS.")
