

const map = [
    'xxxxxxxxxxxxx',
    'x+xxxx..xxxxx',
    'x....xx.....x',
    'xxxx....xxx.x',
    'xx...xxx.xx.x',
    'xoxxxx......x',
    'x......xxxxxx',
    'xxxxxxxxxxxxx',
]
const start = { x: 1, y: 1 }
//bfs
function findPath(map, start) {

    const currentNode = start;
    const qeueuee = [currentNode]
    const visited = []

    const atas = (node) => ({ x: node.x, y: node.y - 1 })
    const bawah = (node) => ({ x: node.x, y: node.y + 1 })
    const kiri = (node) => ({ x: node.x - 1, y: node.y })
    const kanan = (node) => ({ x: node.x + 1, y: node.y })

    const getNeighbor = (neighbor) => {
        return map[neighbor.y][neighbor.x]
    }
    let found = false

    while (qeueuee.length) {
        const node = qeueuee.shift()
        let neigborNode = null;
        visited.push(node)

        neigborNode = atas(node)
        if (getNeighbor(neigborNode) === '.') {
            if (!visited.some(eachVisited => (eachVisited.x === neigborNode.x
                && eachVisited.y === neigborNode.y)))
                qeueuee.push(atas(node))
        }
        else if (getNeighbor(neigborNode) === 'o') {
            visited.push(node)
            found = true
            break
        }
        neigborNode = bawah(node)
        if (getNeighbor(neigborNode) === '.') {
            if (!visited.some(eachVisited => (eachVisited.x === neigborNode.x
                && eachVisited.y === neigborNode.y)))
                qeueuee.push(bawah(node))
        }
        else if (getNeighbor(neigborNode) === 'o') {
            visited.push(node)
            found = true
            break
        }
        neigborNode = kanan(node)
        if (getNeighbor(neigborNode) === '.') {
            if (!visited.some(eachVisited => (eachVisited.x === neigborNode.x
                && eachVisited.y === neigborNode.y)))
                qeueuee.push(kanan(node))
        }
        else if (getNeighbor(neigborNode) === 'o') {
            visited.push(node)
            found = true
            break
        }
        neigborNode = kiri(node)
        if (getNeighbor(neigborNode) === '.') {
            if (!visited.some(eachVisited => (eachVisited.x === neigborNode.x
                && eachVisited.y === neigborNode.y)))
                qeueuee.push(kiri(node))
        }
        else if (getNeighbor(neigborNode) === 'o') {
            visited.push(kiri(node))
            found = true
            break
        }



    }
    return found ? visited : null;

}


console.log('visited path :', findPath(map, start))







