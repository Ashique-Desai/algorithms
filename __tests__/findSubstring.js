const findSubstring = require('../findSubstring')

test('should return [0, 9] if words is ["foo","bar"] and s = barfoothefoobarman', () => {
    expect(findSubstring('barfoothefoobarman', ["foo", "bar"])).toEqual([0, 9]);
});