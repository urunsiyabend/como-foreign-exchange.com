
import json
import re

def has_cyrillic(text):
    return bool(re.search('[а-яА-Я]', text))

def find_untranslated(ru_data, en_data, path=""):
    found = []
    
    for key, value in ru_data.items():
        current_path = f"{path}.{key}" if path else key
        if isinstance(value, str):
            en_val = en_data.get(key)
            if en_val and has_cyrillic(en_val):
                found.append((current_path, value, en_val))
        elif isinstance(value, dict) and isinstance(en_data.get(key), dict):
            found.extend(find_untranslated(value, en_data[key], current_path))
            
    return found

with open(r'c:\Users\uruns\WebstormProjects\comoforeignexchange.com\messages\ru.json', 'r', encoding='utf-8') as f:
    ru = json.load(f)

with open(r'c:\Users\uruns\WebstormProjects\comoforeignexchange.com\messages\en.json', 'r', encoding='utf-8') as f:
    en = json.load(f)

untranslated = find_untranslated(ru, en)

if untranslated:
    print("Keys that have Russian text in EN file:")
    for path, ru_val, en_val in untranslated:
        print(f"Path: {path}")
        print(f"RU: {ru_val}")
        print(f"EN: {en_val}")
        print("-" * 20)
else:
    print("No keys with Russian text found in en.json.")
