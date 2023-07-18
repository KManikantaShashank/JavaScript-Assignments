function findPath(tickets) {
    const graph = {};
    const itinerary = [];
  
    // Build the graph
    for (let [from, to] of tickets) {
      if (!graph[from]) {
        graph[from] = [];
      }
      graph[from].push(to);
    }
  
    // Sort the destinations in lexical order
    for (let from in graph) {
      graph[from].sort();
    }
  
    function dfs(node) {
      const destinations = graph[node];
  
      while (destinations && destinations.length) {
        dfs(destinations.shift());
      }
  
      itinerary.unshift(node);
    }
  
    dfs("A"); // Start with airport A
  
    return itinerary;
  }
  
  // Example usage:
  console.log(findPath([["C", "F"], ["A", "C"], ["I", "Z"], ["F", "I"]]));
  console.log(findPath([["A", "C"], ["A", "B"], ["C", "B"], ["B", "A"], ["B", "C"]]));
  console.log(findPath([["Y", "L"], ["D", "A"], ["A", "D"], ["R", "Y"], ["A", "R"]]));