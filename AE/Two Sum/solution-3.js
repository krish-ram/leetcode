/*
    This is a 2 pointer solution on a sorted array.
    Sort the array provided. T.C. for sorting is O(nlogn)
    On the sorted array, have a left pointer on 0 and right on last element.

    Continue below steps until, l < r
    If (l+r) < targetSum, increment l
    If (l+r) > targetSum, decrement r
    If (l+r) = targetSum, return l and r

    T - O(nlogn)
    S - O(1)
*/