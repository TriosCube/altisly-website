import urllib.request
import json
import re

url = "https://chatgpt.com/share/69fa6cd3-7b44-83ea-8112-7d6f18e54b92"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    scripts = re.findall(r'<script.*?>(.*?)</script>', html, re.DOTALL)
    for s in scripts:
        s = s.replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
        strings = re.findall(r'"([^"]{100,})"', s)
        for string in strings:
            if 'Altisry' in string or 'fintech' in string or 'BaaS' in string or 'position' in string:
                print("---")
                print(string)
except Exception as e:
    print(f"Error: {e}")

