/* 
 * O(2^n) Runtime
 * O(n) Memory Usage
Time Complexity

    Worst-Case: In the worst-case scenario, the algorithm might explore all possible permutations of placing the small rectangles within the large rectangle.  Since each rectangle has two possible orientations (horizontal and vertical), and we have n small rectangles, the total number of potential configurations is on the order of O(2^n).

    Average-Case: In practice, the algorithm often performs better than the worst-case scenario due to backtracking. However, determining a precise average-case time complexity is challenging as it depends on the specific input data and the effectiveness of pruning strategies (e.g., sorting the rectangles by area).  The average-case complexity is often considered to be exponential as well, but with a smaller base than the worst-case O(2^n).

Space Complexity

    Recursion Depth: The maximum depth of the recursion is bounded by the number of small rectangles (n). Each recursive call stores the state of the remaining area and the current placement of rectangles.

    Auxiliary Data Structures: The algorithm uses additional data structures like arrays to store the current placement of rectangles and to track the remaining areas. The space used by these data structures is generally proportional to the number of small rectangles (n).

    Overall: Therefore, the overall space complexity is approximately O(n), primarily determined by the recursion depth and the auxiliary data structures.
 */

function canPackRectangles(largeRect, smallRects) {
    smallRects.sort((a, b) => b.area - a.area); 

    function backtrack(remainingArea, currentRects) {
        if (remainingArea.width * remainingArea.height === 0) { // Check if remaining area is empty
            return true; // Solution found
        }

        for (let i = 0; i < smallRects.length; i++) {
            const rect = smallRects[i];

            // Try placing the rectangle horizontally
            if (rect.width <= remainingArea.width && rect.height <= remainingArea.height) {
                const newRemainingArea1 = {
                    width: remainingArea.width - rect.width,
                    height: remainingArea.height
                };
                const newRemainingArea2 = {
                    width: rect.width,
                    height: remainingArea.height - rect.height
                };
                
                if (backtrack(newRemainingArea1, [...currentRects, rect]) || backtrack(newRemainingArea2, [...currentRects, rect])) {
                    return true; 
                }
            }
            
            // Try placing the rectangle vertically
            if (rect.height <= remainingArea.width && rect.width <= remainingArea.height) {
                const newRemainingArea1 = {
                    width: remainingArea.width - rect.height,
                    height: remainingArea.height
                };
                const newRemainingArea2 = {
                    width: remainingArea.width,
                    height: remainingArea.height - rect.width
                };
                
                if (backtrack(newRemainingArea1, [...currentRects, rect]) || backtrack(newRemainingArea2, [...currentRects, rect])) {
                    return true; 
                }
            }
        }

        return false; // No solution found in this branch
    }

    return backtrack(largeRect, []); 
}


// Example usage:
const largeRect = { width: 5, height: 5 }; 
const smallRects = [
    { width: 2, height: 3, area: 6 },
    { width: 2, height: 2, area: 4 },
    { width: 1, height: 1, area: 1 },
];

if (canPackRectangles(largeRect, smallRects)) {
    console.log("A solution exists!");
} else {
    console.log("No solution found.");
}