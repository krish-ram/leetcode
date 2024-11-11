/*
    You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you must take course b first if you want to take course a.
    The pair [0, 1], indicates that must take course 1 before taking course 0.

    There are a total of numCourses courses you are required to take, labeled from 0 to numCourses - 1.
    Return true if it is possible to finish all courses, otherwise return false.

    Example 1:
    Input: numCourses = 2, prerequisites = [[0,1]]
    Output: true
    Explanation: First take course 1 (no prerequisites) and then take course 0.

    Example 2:
    Input: numCourses = 2, prerequisites = [[0,1],[1,0]]
    Output: false
    Explanation: In order to take course 1 you must take course 0, and to take course 0 you must take course 1. So it is impossible.
*/

function courseSchedule(numCourses, prerequisites) {
    let map = {};

    for (let i = 0; i<numCourses; i++)
        map[i] = [];

    for (let [course, prereq] of prerequisites) {
        map[course].push(prereq);
    }
    
    function dfsHelper(course, visited = {}) {

        if (course in visited)
            return false;

        if (!map[course].length)
            return true;

        visited[course] = true;
        for (let each of map[course]) {
            if (!dfsHelper(each, visited))
                return false;
        }
        map[course] = [];
        return true;
    }

    for (let i = 0; i<numCourses; i++) {
        if(!dfsHelper(i))
            return false;
    }
    return true;
}

const [numCourses, prerequisites] = [5, [[0,1], [0,2],[1,3],[1,4],[3,4]]];
console.log(courseSchedule(numCourses, prerequisites))