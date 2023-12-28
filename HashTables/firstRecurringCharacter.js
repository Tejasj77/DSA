//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined
import { HashTable } from "./hashTable.js";

function firstRecurringCharacter(input) {
  const hashT = new HashTable(input.length);
  for (let i = 0; i < input.length; i++) {
    if (!hashT.get(input[i.toString()])) {
      hashT.set(input[i.toString()], input[i]);
    } else {
      return hashT.get(input[i.toString()]);
    }
  }
}
const result = firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]);
console.log({ result });
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
