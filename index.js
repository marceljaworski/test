function testFunction(x, y) {
    if(!Number.isInteger(x)) return false;
    if(x === undefined) return false;
    if(x && y === undefined) return x * x;
    if(x && y) return x * y;
}
module.exports = {
    testFunction,
};