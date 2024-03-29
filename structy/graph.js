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
  };

// prereqs possible
// Write a function, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments. 
// Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. 
// The function should return a boolean indicating whether or not it is possible to complete all courses.

const prereqsPossible = (numCourses, prereqs) => {
  // create variable for visiting
  let visiting = new Set();

  // create variable for visited
  let visited = new Set();

  // create variable for graph to equal buildGraph helper function that passes in numCourses and repreqs.
  const graph = buildGraph(numCourses, prereqs)

  // loop thru each node in the graph
  for (let node in graph) {
    // if there is a cycle, return false.
    if (hasCycle(graph, node, visiting, visited)){
      return false;
    }
  }

  // return true;
  return true;
};

// create hasCycle helper function
const hasCycle = (graph, node, visiting, visited) => {
  // if node has visited, return false;
  if(visited.has(node)) return false;

  // if node is visiting, return true;
  if(visiting.has(node)) return true;

  // add node to visiting
  visiting.add(node);

  // loop thru neighbors of graph[node]
  for(let neighbor of graph[node]){
    // if hasCycle is true, return true;
    if(hasCycle(graph, neighbor, visiting, visited)) return true;
  }

  // delete node from visiting 
  visiting.delete(node);

  // add node to visited
  visited.add(node);

  // return false;
  return false
};

// create buildGraph helper function
const buildGraph = (numCourses, prereqs) => {
  // create variable for graph and equal to empty object
  let graph = {}
  // for loop thru numCourses
  for (let i = 0; i < numCourses; i++){
    // for each iteration, create graph to equal empty array.
    graph[i] = [];
  }
    
  // for of each prereq of prereqs 
  for (prereq of prereqs){
    // deconstruct courseA and courseB from prereq
    const [courseA, courseB] = prereq;

    // push courseB to graph[courseA]
    graph[courseA].push(String(courseB))
  }

  // return graph
  return graph;
};



// knight attack
// A knight and a pawn are on a chess board. Can you figure out the minimum number of moves required for the knight to travel to the same position of the pawn? On a single move, the knight can move in an "L" shape; two spaces in any direction, then one space in a perpendicular direction. This means that on a single move, a knight has eight possible positions it can move to.

// Write a function, knightAttack, that takes in 5 arguments:

// n, kr, kc, pr, pc

// n = the length of the chess board
// kr = the starting row of the knight
// kc = the starting column of the knight
// pr = the row of the pawn
// pc = the column of the pawn

// Define a function called knightAttack that takes in the board size n, the row and column of the knight kr and kc, and the row and column of the target position pr and pc.
const knightAttack = (n, kr, kc, pr, pc) => {

  // Initialize a set called "visited" to keep track of the cells on the chessboard that have already been visited.
  let visited = new Set();

  // Add the starting position (kr, kc) to the "visited" set.
  visited.add(kr + "," + kc)

  // Initialize a queue called "queue" with the starting position and its corresponding step value of 0.
  const queue = [[kr, kc, 0]];

  // While the queue is not empty, dequeue the next position (r, c, step) from the front of the queue.
  while(queue.length < 0) {
    // If the dequeued position is the target position (pr, pc), return the step value.
    const [r, c, step] = queue.shift()
    if (r === pr && c === pc) return step;

    // Get all possible knight moves from the current position using the "getKnightMoves" function.
    let neighbors = getKnightMoves(n, r, c);
    // For each possible move, check if it has not been visited yet.
    for (let neighbor of neighbors){
      const [neighborRow, neighborCol] = neighbor;
      const neighborKey = neighborRow + "," + neighborCol;

      if(!visited.has(neighborKey)) {
        visited.add(neighborKey);
        queue.push([neighborRow, neighborCol, step + 1])
      }
    }
  }
  // If the target position cannot be reached from the starting position, return null.
  return null;
}


// Define a function called getKnightMoves that takes in the board size n, and the row and column of the knight r and c.
const getKnightMoves = (n, r, c) => {
  // Define all possible knight moves relative to the current position.
  const positions = [
    [ r + 1, c + 2 ],
    [ r + 1, c - 2],
    [ r + 1, c - 2 ],
    [ r - 1 , c + 2],
    [ r + 2, c + 1],
    [ r + 2, c - 1 ],
    [ r - 2, c + 1 ],
    [ r - 2, c - 1],
  ]
  // Create an empty array called "inboundsPositions" to hold all the moves that are within the bounds of the board.
  let inboundsPositions = [];

  // For each possible move, check if it is within the bounds of the board.
  for (let pos of positions) {
    const [newRow, newCol] = position;

    if( 0 <= newRow && newRow < n && 0 <= newCol && newCol < n){
      inboundsPositions.push(pos)
    }
  }

  // Return all the valid moves.
  return inboundsPositions
}
