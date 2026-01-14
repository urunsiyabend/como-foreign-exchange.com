
import json

def compare_json(ru_data, en_data, path=""):
    missing_in_en = []
    
    for key, value in ru_data.items():
        current_path = f"{path}.{key}" if path else key
        if key not in en_data:
            missing_in_en.append((current_path, value))
        elif isinstance(value, dict) and isinstance(en_data[key], dict):
            missing_in_en.extend(compare_json(value, en_data[key], current_path))
            
    return missing_in_en

with open(r'c:\Users\uruns\WebstormProjects\comoforeignexchange.com\messages\ru.json', 'r', encoding='utf-8') as f:
    ru = json.load(f)

with open(r'c:\Users\uruns\WebstormProjects\comoforeignexchange.com\messages\en.json', 'r', encoding='utf-8') as f:
    en = json.load(f)

missing = compare_json(ru, en)

if missing:
    print("Missing keys in en.json:")
    for path, value in missing:
        print(f"Path: {path}")
        print(f"Value in RU: {value}")
        print("-" * 20)
else:
    print("No missing keys in en.json found.")
