import requests

print(requests.get('http://127.0.0.1:5000/chat').text)
print(requests.post('http://127.0.0.1:5000/chat', data={'username': 'frol', 'message': 'Hello!'}).text)
print(requests.post('http://127.0.0.1:5000/chat', data={'username': 12}).text)
print(requests.get('http://127.0.0.1:5000/chat').text)
