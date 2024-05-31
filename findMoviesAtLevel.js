/*
Time Complexity: O(V + E), where V is the number of people and E is the number of friendship connections (essentially the total number of elements in the friends array).
Space Complexity: O(V), due to the seen set and potentially the queue if a large number of nodes are at the same level.

Initialization:

    queue: A queue to perform a breadth-first search (BFS) to traverse levels. It stores pairs of [node, level], where node is the person's index
    and level is their distance from the starting index.
    seen: A set to track visited nodes to avoid cycles.
    movieFrequency: A map to count how many times each movie appears.

Breadth-First Search (BFS):

    The while loop continues as long as there are nodes in the queue.
    In each iteration:
        Dequeue a [current, currentLevel] pair.
        Mark current as seen.
        If currentLevel is the target level:
            Iterate through the movies watched by current and update the frequency count in movieFrequency.
        If currentLevel is less than the target level (explore further):
            Enqueue all of current's friends (not already seen) along with their incremented level.

Sorting and Output:

    After the BFS, convert movieFrequency into an array of [movie, frequency] entries.
    Sort this array in descending order based on frequency.
    Extract the movie names from the sorted array and return them.

*/


function findMoviesAtLevel(friends, watched, index, level) {
    const queue = [[index, 0]]; // Queue to store [node, level] pairs
    const seen = new Set(); // Set to track visited indices
    const movieFrequency = new Map(); // Map to count movie frequencies

    while (queue.length > 0) {
        const [current, currentLevel] = queue.shift();
        seen.add(current);

        if (currentLevel === level) {
            for (const movie of watched[current]) {
                movieFrequency.set(movie, (movieFrequency.get(movie) || 0) + 1);
            }
        } else if (currentLevel < level) { // Only explore deeper levels
            for (const friend of friends[current]) {
                if (!seen.has(friend)) {
                    queue.push([friend, currentLevel + 1]);
                }
            }
        }
    }

    // Sort movies by frequency (descending)
    const sortedMovies = Array.from(movieFrequency.entries()).sort(
        (a, b) => b[1] - a[1]
    );

    return sortedMovies.map(([movie]) => movie); // Extract movie names
}

const friends = [[1, 2], [0, 3], [0], [1]];
const watched = [
    ["MovieA", "MovieB"], 
    ["MovieB", "MovieC"],
    ["MovieA"], 
    ["MovieD", "MovieA"]
];

const index = 0;
const level = 2;
const movies = findMoviesAtLevel(friends, watched, index, level);
console.log(movies); // Output: ["MovieA"]
