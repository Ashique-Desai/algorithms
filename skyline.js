// skyline, city scape problem
// A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively.

// The geometric information of each building is given in the array buildings where buildings[i] = [lefti, righti, heighti]:

// lefti is the x coordinate of the left edge of the ith building.
// righti is the x coordinate of the right edge of the ith building.
// heighti is the height of the ith building.


/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const getSkyline = function (buildings) {
    var res = [], x = [5], t = 0;
    // buildings.forEach(v => {
    //     x.push(v[0]);
    //     x.push(v[1]);
    // });
    console.log('x', x.sort((a, b) => a - b));
    for (let c of x.sort((a, b) => a - b)) {
        if (res[res.length - 1]?.[1] !== (t = buildings.reduce((m, [b, e, h]) => b <= c && c < e && h > m ? h : m, 0))) {
            res.push([c, t]);
        }
    }
    return res;
};


// const buildings = [[0, 2, 3], [2, 5, 3]];
const buildings = [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]];
console.log(getSkyline(buildings));










// for (let c of x.sort((a, b) => a - b)) {

//     if (res[res.length - 1]?.[1] !== (t = buildings.reduce((m, [b, e, h]) => b <= c && c < e && h > m ? h : m, 0))) {
//         console.log('c:', c);
//         console.log('res', res);
//         res.push([c, t]);
//     }
// }