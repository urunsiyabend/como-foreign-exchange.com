
import json

def find_placeholders_or_empty(data, path=""):
    found = []
    
    for key, value in data.items():
        current_path = f"{path}.{key}" if path else key
        if isinstance(value, str):
            if not value.strip() or "TODO" in value.upper() or "FIXME" in value.upper():
                found.append((current_path, value))
        elif isinstance(value, dict):
            found.extend(find_placeholders_or_empty(value, current_path))
            
    return found

with open(r'c:\Users\uruns\WebstormProjects\comoforeignexchange.com\messages\en.json', 'r', encoding='utf-8') as f:
    en = json.load(f)

placeholders = find_placeholders_or_empty(en)

if placeholders:
    print("Empty or placeholder values in en.json:")
    for path, value in placeholders:
        print(f"Path: {path}, Value: '{value}'")
else:
    print("No obvious empty or placeholder values in en.json.")
