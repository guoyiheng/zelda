// ES6中使用Set结构:
let a = new Set([1, 2, 3])
let b = new Set([3, 5, 2])

// 并集
let unionSet = new Set([...a, ...b])
//[1,2,3,5]

// 交集
let intersectionSet = new Set([...a].filter(x => b.has(x)))
// [2,3]

// ab差集
let differenceABSet = new Set([...a].filter(x => !b.has(x)))
let differenceBASet = new Set([...b].filter(x => !a.has(x)))
// [1]
// 再把Set转换为数组即可
let arr1 = Array.from(unionSet)
let arr2 = Array.from(intersectionSet)
let arr3 = Array.from(differenceABSet)
let arr4 = Array.from(differenceBASet)
// 或 let arr = [...set];
console.log(arr1, arr2, arr3, arr4)
