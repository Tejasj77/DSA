# First commit

```js
if (!arr2Item || arr1Item < arr2Item) {
}
```

> In if() we have added "!arr2Item" because if after iteration arr2 is finished, we want to push only arr1 items in the merged array.

```js
else{}
```

> We do not require "!arr1Item" because if arr1 is over first, then anyway else block will run and arr2 items will be pushed in the mergedArray.

# Second commit

```js
while (arr1Item != undefined || arr2Item != undefined) {
    if (
      arr2Item === undefined ||
      (arr1Item != undefined && arr1Item < arr2Item)
    ) {}
```

> The second commit is to mainly safeguard against both array inputs starting with 0. For example : [0, 2, 6, 7], [0, 1, 3, 4]
> In the previous code,

```js
while(arr1Item || arr2Item)
```

> was becoming false because OR operator does not work in case both inputs are 0.
> That is why, added separate checks for undefined in the code.

# Third commit

```js
const result = mergeSortedArrays([0, 1, 2, 3], [0, 1, 3, 4]);
```

> In case the inputs are same from both arrays such as 1 and 1 & 3 and 3, we are handling it by inserting from any of the array and incrementing both pointers by 1.
