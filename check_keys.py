
import os
import re
import json

def get_translation_keys_from_files(directory):
    keys = set()
    # Match t('key') or t("key") or $t('key') or $t("key")
    pattern = re.compile(r"t\(['\"]([^'\"]+)['\"]\)")
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx')):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        matches = pattern.findall(content)
                        for match in matches:
                            keys.add(match)
                except Exception as e:
                    print(f"Error reading {path}: {e}")
    return keys

def check_keys_in_json(keys, data):
    missing = []
    for key in keys:
        parts = key.split('.')
        current = data
        found = True
        for part in parts:
            if isinstance(current, dict) and part in current:
                current = current[part]
            else:
                found = False
                break
        if not found:
            missing.append(key)
    return missing

src_dir = r'c:\Users\uruns\WebstormProjects\comoforeignexchange.com\src'
en_file = r'c:\Users\uruns\WebstormProjects\comoforeignexchange.com\messages\en.json'

with open(en_file, 'r', encoding='utf-8') as f:
    en_data = json.load(f)

used_keys = get_translation_keys_from_files(src_dir)
missing_keys = check_keys_in_json(used_keys, en_data)

if missing_keys:
    print("Keys missing in en.json but used in code:")
    for key in sorted(missing_keys):
        print(key)
else:
    print("All keys used in code are present in en.json.")
