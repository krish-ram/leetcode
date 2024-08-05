/* 
    Here we can use Kadane's algorithm to find the solution in O(n)

    Iterate through the array. Have 2 variables, currentSum and overallSum.
    Set currentSum to 0 and overallSum to -Infinity

    For each element, 
    if the (currentSum + element) > than currentSum, replace currentSum with (currentSum + element).
    Then, if overallSum is less than currentSum + element, update overallSum.

    OverallSum will be our Maximum value
*/