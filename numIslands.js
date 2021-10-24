/* https://leetcode.com/problems/number-of-islands/
 * O(mn) Runtime: 117 ms, faster than 48.11%
 * O(mn) Memory Usage: 41.7 MB, less than 75.92%
 * Alternative approach is sorting, which would give O(1) for memory but O(n log n) for runtime */

function numIslands(grid) {
    let n = grid.length;
    let m = (grid[0] || []).length;
    let count = 0;

    for(let i = 0; i < n; i++){
        for(let k = 0; k < m; k++){
            if(grid[i][k] == '1'){
                depth(grid, i, k);
                ++count;
            }
        }
    } return count;

    function depth(grid, i, k){
        if( i < 0 || 
            k < 0 || 
            i >= n || 
            k >= m || 
            grid[i][k] != '1'
        )   return;

        grid[i][k] = '0';
        depth(grid, i + 1, k);
        depth(grid, i - 1, k);
        depth(grid, i, k + 1);
        depth(grid, i, k - 1);
    }
}

console.log(
    numIslands([
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
    ])
);

/* basically what we are looking for here is 'connected components'
 * this is easily solveable if we call a DFS search on each component
 * first, iterate thru the 2d array: because its a 2d array, a nested for loop is necessary
 * next, we find a potential component and call our DFS on it
 * in the DFS function, we check for edge cases before recursively calling DFS on each adjacent vertex
 * return the result 
*/