/*
    Now K can be greater than or less than length of the array. 
    So find the modulus (k % n), so that we need to rotate atmost the length of the array.
    Create a new array variable.

    Iterate through each index.
    If the sum of index and k is less than length of array, 
    set the element in index to index which is sum (i+k)
    
    Other wise, if sum of index and k is less than length of array, 
    reduce the length from sum and set element in that index.

    The array will contain elements in the rotated position.

    T - O(n)
    S - O(n)
*/