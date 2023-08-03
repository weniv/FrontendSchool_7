//별표 ****

// 1. 비교 연산을 했을 때
let x = 3
let y = 5
console.log(x > y)

// 2. 논리연산을 했을 때 각 비교값이 true나 false인 경우
// (ture나 false가 아닌 경우 단락회로평가가 일어남)
let x = true
let y = false
console.log(x && y)

// 3. true나 false로 평가되는 것들
// if(value) {
//    // value가 true일 때 실행
//    // 그렇다면 어떤 value가 true일까?
// }

if (Boolean('hello')) {
    console.log('실행되었음!') // 실행되었음이 출력되는가?
}

if ('hello') {
    console.log('실행되었음!') // 실행되었음이 출력되는가?
}

Boolean('hello') // true
Boolean('') // false
Boolean(' ') // true
Boolean(0) // false
Boolean(1) // true
Boolean(-1) // true
Boolean(100) // true
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
// !!null // 실무에서 true, false를 구분할 때 사용
// !!null, !!'hello'

// 4. javascript에서 나를 힘들게하는 true, false
x = [1, 2, 3]
x.pop()
x.pop()
x.pop() // js: x가 가리키고 있는 값은 변한적이 없는데 true, false로 바뀌는 것은 옳지 않다. (제 생각이 아닙니다.)

Boolean([1, 2, 3]) // true
Boolean([]) // true
Boolean({ 'one': 1 }) // true
Boolean({}) // true

null == undefined // true
null > undefined // false, 다른 비교도 false
undefined < 100 // 숫자와 비교는 다 false
