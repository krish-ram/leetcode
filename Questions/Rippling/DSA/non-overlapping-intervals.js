function removeNonOverlappingIntervals(intervals) {
    intervals.sort((a, b) => (a[0] - b[0]));

    let result = 0;
    prevEnd = intervals[0][1];

    for (let i=1; i<intervals.length; i++) {
        let [start, end] = intervals[i];

        if (start >= prevEnd) {
            prevEnd = end;
        } else {
            result += 1;
            prevEnd = Math.min(end, prevEnd);
        }
    }
    console.log(result)
}
removeNonOverlappingIntervals([[1, 4], [2, 3], [1, 3], [3, 4], [4, 5]])