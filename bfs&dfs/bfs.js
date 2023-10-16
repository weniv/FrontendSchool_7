// 0. 그래프, 시작점, 특정값을 받는다.
// 0. 아래 과정을 반복할거임!
// 0-1. 방문할 노드 없을때까지..
// 1. 시작노드 방문
// 1-2. 큐에 시작노드가 있어야 방문가능!
// 2. 시작노드를 기준으로..? 인접노드를 큐에 넣는다.
// 2-1. 방문한 시작노드를 방문한 목록에 넣는다.
// 3. 큐에있는 노드하나를 꺼낸다.
// 3-1. 꺼낸 노드가 방문한 노드인지 확인한다.
// 4. 꺼낸 노드의 인접노드를 큐에 넣는다.
// 4-1. 방문한 노드를 역시 방문한 목록에 넣는다.
// 5. 방문한 노드의 값이 찾고자하는 값과 같은지 확인해야함
// 6. 값이 같으면 "있습니다" 리턴 아니면 아무것도안함. -> count를 리턴한다
// 7. 모두 돌아봤는데(반복문끝나면) 없으면... -1

function bfs(graph, start, target) {
    const visited = [];// 방문한 노드들을 넣을곳
    let queue = [start];// 방문할 노드들을 쌓아두는곳
    let count = 0; // 탐색한 횟수
    while(queue.length!==0){
        const current = queue.shift()// 방문할 노드목록에서 하나 꺼내고 노드에 방문하기
        // visited.indexOf(current)이게 -1이면 방문 안한거임~!
        if (visited.indexOf(current) === -1) {
            // 이때가 방문(탐색)을 해서 방문(탐색)을 한 목록에 추가되는부분
            visited.push(current);
            count++;
            if (current===target) {
                // return "있습니다."
                return [current, count]
            }
            
            // 방문하지 않은 인접노드들만 가져오기
            const neighbors = graph[current].filter(n=> visited.indexOf(n) === -1);
            // 큐에 인접노드 추가하기
            queue = queue.concat(neighbors);
        }
    }
    return [-1, count]
}
// const graph = {
//     0:[1,2,3],
//     1:[4,5],
//     2:[],
//     3:[],
//     4:[6],
//     5:[],
//     6:[]
// }
const graph = {
    0:[1,2,3],
    1:[4,5],
    2:[],
    3:[],
    4:[],
    5:[6],
    6:[]
}

const result = bfs(graph,0,4)
console.log(result)