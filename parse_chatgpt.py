import urllib.request
import json
import re

url = "https://chatgpt.com/share/69fa608a-8538-83ea-8b74-b7185ef9f40a"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    match = re.search(r'<script id="__NEXT_DATA__".*?>(.*?)</script>', html, re.DOTALL)
    if match:
        data = json.loads(match.group(1))
        print("Found NEXT_DATA. However, ChatGPT might use a different state injection now.")
    
    # Alternatively, we can just extract all text that looks like conversation from the HTML
    # We know the text contains things like "Mercy", "Treasury", "RTCP", "Onyeka", "ALM"
    # Let's extract script tags and look for large string literals
    scripts = re.findall(r'<script.*?>(.*?)</script>', html, re.DOTALL)
    for s in scripts:
        if 'Mercy' in s or 'Treasury' in s or 'RTCP' in s:
            # Found the script with the data
            # Let's unescape it roughly
            s = s.replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
            
            # Print chunks of text that are long enough
            strings = re.findall(r'"([^"]{100,})"', s)
            for string in strings:
                if 'Treasury' in string or 'Mercy' in string:
                    print("---")
                    print(string)
except Exception as e:
    print(f"Error: {e}")

