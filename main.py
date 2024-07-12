from hashlib import sha256
print(sha256('Hello World'.encode('utf-8')).hexdigest())