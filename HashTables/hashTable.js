// Custom hash table
export class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt() * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    if (this.data[address]) {
      for (let i = 0; i < this.data[address].length; i++) {
        if (this.data[address][i][0] === key) return this.data[address][i][1];
      }
    }
    return undefined;
  }

  log() {
    console.log(this.data);
  }
}

const hashT = new HashTable(2);
hashT.set("Tejas", 100);
// hashT.log();
hashT.set("Sylvester", 120);
hashT.set("Steve", 150);
hashT.log();
// console.log(hashT.get("Tejas"));
// console.log(hashT.get("Sylvester"));
// console.log(hashT.get("Steve"));
