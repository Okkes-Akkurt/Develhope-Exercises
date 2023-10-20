import crypto, { randomBytes as _randomBytes } from 'crypto';
Object.keys(crypto);
const randomBytes = _randomBytes(16);
const randomID = randomBytes.toString('hex');
console.log(randomID);
