// dec 4 2024 output:

dp: [
    ["P", "x", "I", "x", "N", "x", "x"],
    ["A", "x", "S", "x", "G", "x", "x"],
    ["Y", "A", "H", "R", "x", "x", "x"],
    ["P", "x", "I", "x", "x", "x", "x"],
];

// previous date output

dp: [
    ["P", "x", "x", "I", "x", "x", "N"],
    ["A", "x", "x", "S", "x", "x", "G"],
    ["Y", "x", "A", "H", "x", "R", "x"],
    ["P", "A", "x", "I", "R", "x", "x"],
];

dp: [
    ["P", "x", "I", "x", "N", "x", "x"],
    ["A", "x", "S", "x", "G", "x", "x"],
    ["Y", "A", "H", "R", "x", "x", "x"],
    ["P", "x", "I", "x", "x", "x", "x"],
];

// dp in zag loop
// 1
dp: [
    ["P", "x", "x", "x", "x", "x", "x"],
    ["A", "x", "x", "x", "x", "x", "x"],
    ["Y", "A", "x", "x", "x", "x", "x"],
    ["P", "x", "x", "x", "x", "x", "x"],
];
//2
dp: [
    ["P", "x", "x", "x", "x", "x", "x"],
    ["A", "x", "A", "x", "x", "x", "x"],
    ["Y", "A", "x", "x", "x", "x", "x"],
    ["P", "x", "x", "x", "x", "x", "x"],
];

dp: [
    ["P", "x", "I", "x", "x", "x", "x"],
    ["A", "x", "S", "x", "x", "x", "x"],
    ["Y", "A", "H", "R", "x", "x", "x"],
    ["P", "x", "I", "x", "x", "x", "x"],
];

dp: [
    ["P", "x", "I", "x", "x", "x", "x"],
    ["A", "x", "S", "x", "R", "x", "x"],
    ["Y", "A", "H", "R", "x", "x", "x"],
    ["P", "x", "I", "x", "x", "x", "x"],
];

// went in else { count: 3 }
// went in if count === numRows
// in else before { currCol: 0, currRow: 3 }
// in else after { currCol: 1, currRow: 1 }
// went in else { count: 3 }
// went in if count === numRows
// in else before { currCol: 2, currRow: 3 }
// in else after { currCol: 3, currRow: 1 }
// went in else { count: 3 }
// went in if count === numRows
// in else before { currCol: 4, currRow: 3 }
// in else after { currCol: 5, currRow: 1 }
