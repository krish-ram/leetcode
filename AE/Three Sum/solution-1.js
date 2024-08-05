/* 
This is a combination of loop and pointers in a sorted array.

First sort the array.
Now iterate through the array until len-2. 
For each element, next element will be the left pointer and last element will be the right pointer.
Find the sum of element + left pointer + right pointer.
If sum is less than the target sum, increment L
If sum is greater than the target sum, decrement the R.
Other wise of the sum is equal to target sum, push all 3 elements to an array and 
increment/decrement L and R
Iterate through the array until len-2

*/