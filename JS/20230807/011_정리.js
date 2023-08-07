// push
[10, 20, 30].push(40)
// pop
[10, 20, 30].pop()

// unshift
[10, 20, 30].unshift(40)
// shift
[10, 20, 30].shift()

// splice
[10, 20, 30].splice(1, 0, 40)

// sort
[10, 20, 30].sort()
[10, 20, 30].sort((a, b) => a - b)
[10, 20, 30].sort((a, b) => b - a)

// map
[10, 20, 30].map((v, i) => v ** 2)

// forEach
[10, 20, 30].forEach((v, i) => console.log(v))

// filter
[10, 20, 30].filter((v, i) => v > 15)

// reduce
[10, 20, 30].reduce((a, c) => a + c, 0)

// includes(String에도 있습니다!)
[10, 20, 30].includes(20)

// join
[10, 20, 30].join('!')

// reverse
[10, 20, 30].reverse()


// 메서드 체이닝에서 주의할 점
Array(10)
    .fill(0)
    .map((_, i) => i + 1)
    .filter(v => v % 2 === 0)
    .includes('1') // array가 깨지기 때문에
    // 여기서부터는 array와 관련된 메서드 체이닝이 아니라 boolean과 관련된 메서드 체이닝이 들어가야 합니다.
