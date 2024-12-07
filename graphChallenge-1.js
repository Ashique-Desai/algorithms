// Graph challenge from codeBryte, https://medium.com/@ballerbytes/cracking-the-react-js-developer-assessment-on-coderbyte-2023-7fe6d13280c8

//  Have the function GraphChallenge(strArr) take strArr, which will be an array of strings that models a non-looping Graph.
//  The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) in the array as a string. 
//  The next N elements will be the nodes which can be anything (A, B, C, ... Brick Street, Main Street, etc.). Then after the Nth element, 
//  the rest of the elements in the array will be the connections between all of the nodes. They will look like this: (A-B, B-C .. Brick Street-Main Street. . etc.). 
//  Although,there may exist no connections at all. An example of strArr may be: [“4", “A”, ”B”, “C”, “D”, “A-B”, “B-D”, ”B-C”, “C-D”]. 
//  Your program should return the shortest path from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-D. 

function GraphChallenge(strArr) {
    const N = parseInt(strArr[0]);
    const nodes = strArr.slice(1, N + 1);
    const connections = strArr.slice(N + 1).join(' ').split(' '); // Split by spaces

    const graph = new Map();

    // Initialize nodes in the graph
    for (const node of nodes) {
        graph.set(node, new Set());
    }

    // Add connections
    for (const connection of connections) {
        const [nodeA, nodeB] = connection.split('-');
        graph.get(nodeA).add(nodeB);
        graph.get(nodeB).add(nodeA); // Since A can get to B and B can get to A
    }

    const startNode = nodes[0];
    const endNode = nodes[N - 1];
    const visited = new Set();
    const queue = [[startNode, [startNode]]];
    // BFS (Breath First Search)
    while (queue.length > 0) {
        const [currentNode, path] = queue.shift();
        if (currentNode === endNode) {
            return path.join('-');
        }
        if (!visited.has(currentNode)) {
            visited.add(currentNode);
            for (const neighbor of graph.get(currentNode)) {
                if (!visited.has(neighbor)) {
                    queue.push([neighbor, [...path, neighbor]]);
                }
            }
        }
    }

    return -1; // No path found
}

// Example usage
console.log(GraphChallenge(["5", "A", "B", "C", "D", "F", "A-B", "A-C", "B-C", "C-D", "D-F"]));