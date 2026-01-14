
import json
import re

def has_cyrillic(text):
    return bool(re.search('[а-яА-Я]', text))

def find_cyrillic_in_en(data, path=""):
    found = []
    
    for key, value in data.items():
        current_path = f"{path}.{key}" if path else key
        if isinstance(value, str):
            if has_cyrillic(value):
                found.append((current_path, value))
        elif isinstance(value, dict):
            found.extend(find_cyrillic_in_en(value, current_path))
            
    return found

with open(r'c:\Users\uruns\WebstormProjects\comoforeignexchange.com\messages\en.json', 'r', encoding='utf-8') as f:
    en = json.load(f)

cyrillic_items = find_cyrillic_in_en(en)

if cyrillic_items:
    print("Russian (Cyrillic) text found in en.json:")
    for path, value in cyrillic_items:
        print(f"Path: {path}, Value: '{value}'")
else:
    print("No Cyrillic text found in en.json.")
