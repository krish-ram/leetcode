/* 
    This needs to be solved with a stack.
    We need to keep track of all the opening brackets and match them to closing brackets.

    Iterate through the brackets. 
    Check if each element is a opening bracket or a closing bracket.
    If opening bracket, push it into the stack (array).
    If its a closing bracket, check the last element in the stack. 
    If the bracket types match, pop the bracket and move to next element.

    At the end of the iteration, the stack should be empty. 
    Else we know one of the bracket is unmatched. 

    T - O(n)
    S - O(n)
*/