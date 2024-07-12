const crypto = require('crypto')

const sha256FromString = (str) => {
  const hash = crypto.createHash('SHA256')
  const data = hash.update(Buffer.from(str, 'utf-8'))
  return data.digest()
}

console.log(sha256FromString('Hello World').toString('hex'))