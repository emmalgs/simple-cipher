// function makeKey() {
//   const chars = "abcdefghijklmnopqrstuvwxyz";
//   let key = ''
//   while (key.length < 100) {
//     key += chars[Math.floor(Math.random() * 26)];
//   }
//   return key
// }



export class Cipher {
  constructor() {
    this._key = ''
  }

  encode(string) {
    this._key = string;
  }

  decode() {
  }

  get key() {
    return this._key
  }
}
