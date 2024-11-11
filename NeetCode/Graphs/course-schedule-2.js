/*
    You are given an array prerequisites where prerequisites[i] = [a, b] indicates that 
    you must take course b first if you want to take course a.

    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
    There are a total of numCourses courses you are required to take, labeled from 0 to numCourses - 1.

    Return a valid ordering of courses you can take to finish all courses. 
    If there are many valid answers, return any of them. 
    If it's not possible to finish all courses, return an empty array.

    Example 1:
    Input: numCourses = 3, prerequisites = [[1,0]]
    Output: [0,1,2]
    Explanation: We must ensure that course 0 is taken before course 1.

    Example 2:
    Input: numCourses = 3, prerequisites = [[0,1],[1,2],[2,0]]
    Output: []
    Explanation: It's impossible to finish all courses.
*/
function courseScheduleTwo(numCourses, prerequisites) {
    let map = {};

    for (let i = 0; i<numCourses; i++)
        map[i] = [];

    for (let [course, prereq] of prerequisites) {
        map[course].push(prereq);
    }
    let output = [];
    let visited = {}, cycle = {};
    function dfsHelper(course) {

        if (course in cycle)
            return false;

        if (course in visited)
            return true;

        cycle[course] = true;
        for (let each of map[course]) {
            if (!dfsHelper(each, cycle))
                return false;
        }
        delete cycle[course];
        visited[course] = true;
        output.push(course);
        return true;
    }

    for (let i = 0; i<numCourses; i++) {
        if(!dfsHelper(i))
            return [];
    }
    return output;
}

const [numCourses, prerequisites] = [6, [[0,1], [0,2],[1,3],[3,2],[4,0], [5,0]]];
console.log(courseScheduleTwo(numCourses, prerequisites))