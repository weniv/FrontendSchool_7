// 문제1: 더하기, 빼기, 나누기, 곱하기를 하는 함수를 만들어주세요.
// https://school.programmers.co.kr/learn/courses/30/lessons/120803

function add(x, y) {
    return x + y
}

add(1, 2)


function sub(x, y) {
    return x - y
}

sub(1, 2)

// 문제2: '10,000,000,000'와 같은 문자를 입력받아 10000000000와 같은 숫자를 반환하는 함수를 만들어주세요.
function stringToNumber(str) {
    let answer = parseInt(str.replaceAll(',', ''))
    return answer
}

// 문제3: 입력된 문자열을 콘솔로 출력하고 입력된 문자열을 쪼개서 출력하는 함수를 만들어주세요.
// 입력: world
// 출력: ['w', 'o', 'r', 'l', 'd']
function printAndSplit(str) {
    console.log(str)
    return str.split('')
}

printAndSplit('world')

// 문제4: 2개의 숫자가 입력되면 2개의 숫자를 더하고 더한 2개의 숫자를 곱하는 함수를 만들어주세요.
// 입력: 1, 2
// 출력: (1 + 2) * (1 + 2) = 9

// 4.1번째 풀이
function addAndMultiply(x, y) {
    let sum = x + y
    let multiply = sum * sum
    return multiply
}

// 4.2번째 풀이
function add(x, y) {
    return x + y
}

function addAndMultiply(x, y) {
    let sum = add(x, y) * add(x, y)
    return sum
}

// 4.3번째 풀이
function addAndMultiply(x, y) {
    // 메모리 효율을 위해 함수를 내부에서 만들어서 사용
    function add(x, y) {
        return x + y
    }
    let sum = add(x, y) * add(x, y)
    return sum
}

// 문제5: x**2 + 4x - 12를 구해주는 함수를 만들어주세요.
// 입력 : 3
// 출력 : 9 + 12 - 12 = 9

function calculate(x) {
    return x ** 2 + 4 * x - 12
}
