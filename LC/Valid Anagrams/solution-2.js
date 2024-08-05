/*
    This is a hashmap based solution.

    Check the length of the 2 strings. If not same, return false.
    Iterate through the fist string and create a map, with character as string and count of character as value.

    Now iterate through second string and if each character is found in hashmap, reduce the count.
    If any character is not found, return false.

    End of loops, the hashmap should have all characters with 0 count.

    T - O(n)
    S - O(n)
*/