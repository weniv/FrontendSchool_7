const arr = [1, 2, 3] // arr -> [1, 2, 3]이 화살표가 바뀌지 못한다는 것입니다.
arr[0] = 1000
arr

// arr = 10 // 애러

//////////////////////

const arr = [1, 2, 3]
arr.push(4)
arr

//////////////////////

const arr = [1, 2, 3]
arr.pop()
arr