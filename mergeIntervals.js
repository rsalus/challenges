/* https://leetcode.com/problems/merge-intervals/
 * O(n log n) Runtime: 119 ms, faster than 35.60%
 * O(n) Memory Usage: 40.6 MB, less than 69.43% */

function merge(intervals) {
    if (intervals.length < 2) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    let prev = intervals[0];

    for (let i = 1; i < intervals.length; ++i)
    {
        if (prev[1] >= intervals[i][0])
        {
            prev = [prev[0], Math.max(prev[1], intervals[i][1])];
        }
        else
        {
            result.push(prev);
            prev = intervals[i];
        }
    }

    result.push(prev);
    return result;
}

console.log(
    merge([[1, 3], [2, 6], [8, 10], [15, 18]])
);

/*
    In this problem, we can sort the intervals in advance. 
    After that we can go through the sorted array and try to somehow merge these intervals. 
    The key thing here is to come up with how we can merge the intervals.
    We need to check if the current interval begins after the previous interval ends. 
    We can easily check it because we’ve sorted the intervals.
*/

/*
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        LinkedList<int[]> merged = new LinkedList<>();
        for (int[] interval : intervals) {
            // if the list of merged intervals is empty or if the current
            // interval does not overlap with the previous, simply append it.
            if (merged.isEmpty() || merged.getLast()[1] < interval[0]) {
                merged.add(interval);
            }
            // otherwise, there is overlap, so we merge the current and previous
            // intervals.
            else {
                merged.getLast()[1] = Math.max(merged.getLast()[1], interval[1]);
            }
        }
        return merged.toArray(new int[merged.size()][]);
    }
*/