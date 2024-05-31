/*
JavaScript implementation of topological sort using Depth-First Search (DFS)
Initialization:

    visited: A dictionary to keep track of visited vertices.
    sorted: An array to store the topologically sorted vertices.

dfs(vertex) Function:

    Base Case: If the vertex has already been visited, return to avoid cycles.
    Mark Visited: Mark the vertex as visited.
    Recursive Exploration: Call dfs recursively for each of the vertex's outgoing neighbors. This ensures that all dependencies of a vertex are processed before the vertex itself.
    Add to Sorted: After exploring all neighbors, add the vertex to the front of the sorted array. Adding to the front ensures that vertices are added in reverse topological order.

Main Loop:

    Iterate through all vertices in the graph.
    For each unvisited vertex, initiate a DFS traversal using the dfs function.

Return Sorted: Finally, return the sorted array. Since vertices were added in reverse topological order, the array is now in the correct order.

Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges in the graph.
Space Complexity: O(V) for the visited dictionary and the recursion stack.
*/
function topologicalSortDFS(graph) {
  const visited = {}; // Track visited vertices
  const sorted = []; // Store the sorted vertices in reverse order

  function dfs(vertex) {
    if (visited[vertex]) return; // Already visited

    visited[vertex] = true;

    for (const neighbor of graph.getOutgoingEdges(vertex)) {
      dfs(neighbor); // Recursively explore neighbors first
    }

    sorted.unshift(vertex); // Add the vertex to the front of the list
  }

  for (const vertex of graph.vertices) {
    dfs(vertex); // Start DFS from each unvisited vertex
  }

  return sorted; // Reverse the list for correct topological order
}

class Graph {
    constructor() {
      this.adjacencyList = new Map(); // Store the graph as an adjacency list
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []); // Initialize an empty list of neighbors
      }
    }
  
    addEdge(from, to) {
      if (!this.adjacencyList.has(from) || !this.adjacencyList.has(to)) {
        throw new Error("Vertices not found in the graph");
      }
      this.adjacencyList.get(from).push(to); // Add 'to' as a neighbor of 'from'
    }
  
    get vertices() {
      return Array.from(this.adjacencyList.keys()); // Get all vertices in the graph
    }
  
    getOutgoingEdges(vertex) {
      return this.adjacencyList.get(vertex) || []; // Get neighbors of a vertex
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");

const sorted = topologicalSortDFS(graph);
console.log(sorted); // Output: Topologically sorted vertices
