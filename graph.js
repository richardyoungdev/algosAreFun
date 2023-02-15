// has path
// Write a function, hasPath, that takes in an object representing the adjacency list 
//of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

const hasPath = (graph, src, dst) => {
    // create queue and initialize with src in the array
    const queue = [src];
  
    // create while loop to iterate through the queue
    while (queue.length > 0) {
        // create current variable to store the first element in the queue
        const current = queue.shift();
        // if current is equal to dst, return true
        if (current === dst) return true;
    
        // iterate through the graph[current] and push the neighbor into the queue
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
  
    // return false if there is no path
    return false;
  };

//   undirected path
// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
// The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

const undirectedPath = (edges, nodeA, nodeB) => {
    //helper function
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
};
const hasPath = (graph, src, dst, visited) => {
    //if found we are done
    if (src === dst) return true;
    //if we seen then lets not go back this will stop the infin loop
    if (visited.has(src)) return false;
    //if we never seen then we want to add it to the src
    //REMEMBER SRC is the current node you are in including its neighbors
    visited.add(src)
    //you need to check if neighbor is connected with SRC
    for (let neighbor of graph[src]) {
        if(hasPath(graph, neighbor, dst, visited) === true ) {
            return true;
        }
    }
    return false;
}
//part 1 need your graph
const buildGraph = (edges) => {
    const graph = {};
    //want to fill in all the info for the graph
    //we want to go thru all edges and we know that one edge is a pair ex: [‘i’, ‘j’]
    for (let edge of edges) {
        //destructure the two nodes we have above in line 1
        const [ a, b ] = edge;
        //logic below is that if the a node is not in graph we wioll initizile it in a graph into a empty array.
        // in plain english if a is not in this bitch we will now throw in a empty array and do the same for B nodes
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        //here if A node exist then we find all the neighbors for a and vice versa if found, push
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}


///////

// connectedComponentsCount
const connectedComponentsCount = (graph) => {
    const visited = new Set();

    let count = 0;

    for (let node in graph) {
        if (explore(graph, node, visited) === true){
            count++
        }
    }

    return count;
};

// explore is created using graph and current node it is in.
const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false;

    visited.add(String(current));

    // iterate each node inside the graph
    for (let neighbor of graph[current]){
        explore(graph, neighbor);
    }

    return true;

};


// shortest path
// Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
// The function should return the length of the shortest path between A and B. 
// Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.

const shortestPath = (edges, nodeA, nodeB) => {
    // create a graph using the buildGraph function and passing in the edges
    let graph = buildGraph(edges)
    
    // create a Set of visited nodes and initialize it with nodeA
    let visited = new Set( [nodeA] );
  
    // create a queue with nodeA and a distance of 0
    let queue = [ [nodeA, 0] ];
  
    // while the queue is not empty
    while (queue.length > 0){
      // remove the first element from the queue and destructure it into a node and a distance
      const [node, distance] = queue.shift();
      // if the node is nodeB, return the distance
      if (node === nodeB) return distance;
      // for each neighbor of the node
      for (let neighbor of graph[node]){
        // if the neighbor has not been visited
        if (!(visited.has(neighbor))){
          // add the neighbor to the visited Set
          visited.add(neighbor)
          // add the neighbor and the distance + 1 to the queue
          queue.push([neighbor, distance + 1])
        }
      }
    }
  
    // if nodeB is not reachable from nodeA, return -1
  return -1;
  
  };

const buildGraph = (edges) => {
    // create an empty object to store the graph
    let graph = {}
    // for each edge in the edges array
    for (let edge of edges) {
      // destructure the edge into two nodes (a and b)
      const [a, b] = edge;
      // if node a is not in the graph, add an empty array to the graph for node a
      if(!(a in graph)) graph[a] = []
      // if node b is not in the graph, add an empty array to the graph for node b
      if(!(b in graph)) graph[b] = []
      
      // push node b to the neighbors of node a in the graph
      graph[a].push(b)
      // push node a to the neighbors of node b in the graph    
      graph[b].push(a)
    
    }
    // return the completed graph
    return graph;
  }
  

// In this code, you need to use "distance + 1" rather than "distance++" because you are adding the next distance value to the queue, not incrementing the current distance value. 
// The value of distance is the current distance from the starting node to the current node. To calculate the distance from the starting node to the next node, you need to add 1 to the current distance value, which is why you use "distance + 1".


// island count
// Write a function, islandCount, that takes in a grid containing Ws and Ls. 
// W represents water and L represents land. The function should return the number of islands on the grid. 
// An island is a vertically or horizontally connected region of land.

const islandCount = (grid) => {
    // create variable name visited to equal a new Set()
    const visited = new Set();

    // create count variable
    let count = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++){
            // if explore strickly equals true, count++
            if( explore(grid, r, c, visited) === true) {
                count++
            }
        }
    }

    // return count
    return count;
};

// create explore helper function
const explore = (grid, r, c, visited) => {
    // check if the position is within the bounds of the grid by checking
    // if r and c are greater than or equal to 0 and less than the length of the grid and the length of the first row, respectively.
    // create row inbounds
    const rowInbounds = 0 <= r && r < grid.length;

    // create col inbounds
    const colInbounds = 0 <= c && c < grid[0].length;

    // base case
    // if not within rowInbounds or not within colInbounds, return false;
    if (!rowInbounds || !colInbounds) return false;

    // if the position is not water, the function checks if it has already been 
    if(grid[r][c] === "W") return false;

    const pos = r + "," + c;

    if (visited.has(pos)) return false;
    visited.add(pos);

    // helper function recursively calls itself for the four neighboring positions:

    // one row above
    explore(grid, r - 1 , c, visited)

    // one row below
    explore(grid, r + 1, c, visited)

    // one col to the right
    explore(grid, r, c + 1, visited)

    // one col to the left
    explore(grid, r, c - 1, visited)

    return true;

};

// 
// minimum island
// Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. 
// The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

// You may assume that the grid contains at least one island.

const minimumIsland = (grid) => {
    // create variable for visited 
    let visited = new Set();
    
    // create variable for minSize to equal Infinity
    let minSize = Infinity;
    
    // two for loops. first for loop will loop thru the rows; and the second loop thru cols
    for (let r = 0; r < grid.length; r++){
      for( let c = 0; c < grid[0].length; c++){
        // create variable called size to equal the helper function to check size
        const size = exploreSize(grid, r, c, visited)
        
        if (size > 0 && size < minSize){
          minSize = size;
        }
      }
    }
    
    return minSize
    
  };
  
  const exploreSize = (grid, r, c, visited) => {
    // rowInBounds
    let rowInBounds = 0 <= r && r < grid.length;
    
    // colInBounds
    let colInBounds = 0 <= c && c < grid[0].length;
    
    // base case for if NOT in rowInBounds or NOT in colInBounds
    if (!(rowInBounds) || !(colInBounds)) return 0;
    
    
    // check if grid[r][c] === "w", if so, return 0;
    if (grid[r][c] === "W") return 0;
    
    // create pos variable = r + "," + c
    let pos = r + "," + c;
    
    // if pos has visited, return 0;
    if (visited.has(pos)) return 0;
    
    // add pos to visited
    visited.add(pos);
    
    // create size variable
    let size = 1
    
    // call the 4 recurisve player controls -- up, down, left, right
    size = size + exploreSize(grid, r - 1, c, visited)
    size = size + exploreSize(grid, r + 1, c, visited)
    size = size + exploreSize(grid, r, c - 1, visited)
    size = size + exploreSize(grid, r, c + 1, visited)
    
    // return size
    return size
  }