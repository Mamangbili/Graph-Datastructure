const graph = {
    'a': ['b','c','z'],
    'b': ['d','c'],
    'c': ['a','e'],
    'd': ['c'],
    'e': ['f','b'],
    'f': [],
    'g': ['e'],
    'z': []
}
//depth first search
function find(graph,start ,target,visited=[]){
    visited.push(start)
    if (start === target) return visited
    let result = undefined;
    for(const neighbor of graph[start]){
        if(visited.includes(neighbor)) continue
        path = find(graph, neighbor, target, visited)  
        if(!result) result = path
    }
    return result

}

console.log(find(graph,'a','f'))
console.log(find(graph,'e','a'))
console.log(find(graph,'g','b'))
console.log(find(graph,'a','z'))
//undefined path
console.log(find(graph,'a','g'))

//breadth first search
function find2(graph, start, target) {
  const queue = [start];
  const visited = [start];

  while (queue.length) {
    const node = queue.shift();

    for (const neighbor of graph[node]) {
      if (neighbor === target) {
        return [...visited, neighbor];
      }

      if (!visited.includes(neighbor)) {
        visited.push(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return undefined;
}
console.log(find2(graph,'a','f'))
console.log(find2(graph,'g','b'))
console.log(find2(graph,'a','z'))
//undefined
console.log(find2(graph,'a','g'))