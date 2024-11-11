/*
    sort the intervals, so that these are nearby
*/
function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);
    let output = [intervals[0]];
    console.log(output[output.length-1][1]);
    for (let i=1; i<intervals.length; i++) {
        let [start, end] = intervals[i];
        let lastEnd = output[output.length-1][1];

        if (start <= lastEnd)
            output[output.length-1][1] = Math.max(lastEnd, end);
        else 
            output.push([start, end]);
        
    }
    console.log(output);
}

mergeIntervals([[1, 3], [8, 10], [12, 15], [2, 6]])