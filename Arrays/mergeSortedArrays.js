function mergeSortedArrays(arr1, arr2) {
  // Guard clauses
  if (arr1.length === 0) return arr2;
  else if (arr2.length === 0) return arr1;

  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 0;
  let j = 0;
  const mergedArray = [];
  while (arr1Item != undefined || arr2Item != undefined) {
    if (
      arr2Item === undefined ||
      (arr1Item != undefined && arr1Item < arr2Item)
    ) {
      mergedArray.push(arr1Item);
      i++;
      arr1Item = arr1[i];
    } else {
      mergedArray.push(arr2Item);
      j++;
      arr2Item = arr2[j];
    }
  }
  return mergedArray;
}

const result = mergeSortedArrays([0, 2, 6, 7], [0, 1, 3, 4]);
console.log({ result });
