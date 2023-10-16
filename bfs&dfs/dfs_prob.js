const tree = [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [4, 6]];
// 아래 함수를 변경해주세요
function DFS(graph, start,target) {
    let count = 0
    let visited = [];
    let stack = [start];
    while (stack.length !== 0) {
        let current = stack.pop();
        if (visited.indexOf(current) === -1) {
            visited.push(current);
            count++;
            if(current===(target)){
                return [current,count]
            }
            let neighbors = graph[current].filter(n => visited.indexOf(n) === -1);
            stack = stack.concat(neighbors);
        }
    }
		// 없으면 
    console.log("?")
    return [-1,count];
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
// const tree = [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [4, 6]];
function convert(tree=[]) {
    const graph={};
    tree.forEach((nodeInfo)=>{
        graph[nodeInfo[0]]=[]
        graph[nodeInfo[1]]=[]
    })

    tree.forEach((nodeInfo)=>{
        graph[nodeInfo[0]].push(nodeInfo[1])
    })
    return graph
}
const graph = {
    0:[1,2,3],
    1:[4,5],
    2:[],
    3:[],
    4:[],
    5:[6],
    6:[]
}
console.log(DFS(graph,0,4))
