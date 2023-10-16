// 재귀함수로 배열의 모든 합 구하기
function sumArray(arr, index = 0) {
    if (index === arr.length) {
        return 0;
    }
    console.log(arr[index],"뒤에 더할값")
    //여기를 채워주세요
    return arr[index] + sumArray(arr,index+1)
}

// 사용 예시
const arr = [1, 2, 3, 4, 5];
const result = sumArray(arr);
console.log(result);  // 출력: 15
