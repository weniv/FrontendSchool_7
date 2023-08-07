// 면접에서 map을 물어본다면!?
// 이러한 데이터의 형태를 json이라고 합니다. json은 별도로 배웁니다.
let data = [
    {
        "_id": "a",
        "index": 0,
        "age": 40,
        "name": "hojun",
        "gender": "female"
    },
    {
        "_id": "b",
        "index": 1,
        "age": 29,
        "name": "gildong",
        "gender": "male"
    },
    {
        "_id": "c",
        "index": 2,
        "age": 29,
        "name": "Ruiz",
        "gender": "male"
    },
    {
        "_id": "d",
        "index": 3,
        "age": 31,
        "name": "Bender",
        "gender": "male"
    }
]

data[0]
data[0]['name']
data[0]['age']
    (data[0]['age'] + data[1]['age'] + data[2]['age'] + data[3]['age']) / 4
data.map(v => v['age'])
data.map(v => {
    return v['age']
})
// 이게 도대체 어떻게 돌아가는 것일까요?
// [1, 2, 3, 4].map(v => v * 2)이런 예제로는 10번 공부하셔도 이해가 힘듭니다.
// 여기서 v는 1개의 object입니다.
// 마치 아래와 같습니다.
let v = {
    "_id": "aa",
    "index": 0,
    "age": 40,
    "name": "Gabriela Farrell",
    "gender": "female"
}
v['age']