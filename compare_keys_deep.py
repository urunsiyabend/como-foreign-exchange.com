
import json

def get_keys(data, prefix=""):
    keys = []
    for k, v in data.items():
        full_key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            keys.extend(get_keys(v, full_key))
        else:
            keys.append(full_key)
    return set(keys)

with open(r'c:\Users\uruns\WebstormProjects\comoforeignexchange.com\messages\en.json', 'r', encoding='utf-8') as f:
    en_keys = get_keys(json.load(f))

with open(r'c:\Users\uruns\WebstormProjects\comoforeignexchange.com\messages\ru.json', 'r', encoding='utf-8') as f:
    ru_keys = get_keys(json.load(f))

print(f"EN Keys: {len(en_keys)}")
print(f"RU Keys: {len(ru_keys)}")

missing_in_en = ru_keys - en_keys
missing_in_ru = en_keys - ru_keys

if missing_in_en:
    print("\nMissing in EN:")
    for k in sorted(missing_in_en):
        print(k)

if missing_in_ru:
    print("\nMissing in RU:")
    for k in sorted(missing_in_ru):
        print(k)
