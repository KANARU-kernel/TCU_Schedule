import requests

#download pdf from url
def fetch_pdf(url, path):
    url = 'https://www.asc.tcu.ac.jp/wp-content/uploads/sites/22/2023/03/bc3489249f038fecd99fb3a0b84edd1e.pdf'
    path = 'ComputerScience.pdf'
    r = requests.get(url)
    with open(path, 'wb') as f:
        f.write(r.content)
        