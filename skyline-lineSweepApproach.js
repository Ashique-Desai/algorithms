// Approach) Line Sweeping + Priority Queue (Max Heap)

// The below code does not work because we have to implement the Heap class

var getSkyline = function (buildings) {
    var res = [], x = [], heap = new Heap({ comparator: (a, b) => a[0] - b[0] })
    heap.heappush([0, Number.POSITIVE_INFINITY]);
    buildings.forEach(v => (x.push([v[0], v[1], v[2]]), x.push([v[1], 0, v[2]])));
    for (let [c, e, h] of x.sort((a, b) => a[0] === b[0] ? Math.sign(b[1]) === Math.sign(a[1]) ? a[1] === 0 ? a[2] - b[2] : b[2] - a[2] : b[1] - a[1] : a[0] - b[0])) {
        if (e) heap.heappush([h, e]);
        else while (heap.peek()[1] <= c) heap.heappop();
        if (res[res.length - 1]?.[1] !== heap.peek()[0]) res.push([c, heap.peek()[0]]);
    }
    return res;
};

const buildings = [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]];
console.log(getSkyline(buildings));