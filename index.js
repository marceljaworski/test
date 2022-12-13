function testFunction(x, y, z) {
    if(!Number.isInteger(x)) return false;
    if(x === undefined) return false;
    if(x && y === undefined) return x * x;
    if(arguments.length > 2) {
        let result = Array.from(arguments).reduce(
            (acc, cur) => acc * cur, 1
            );
        return result;
    }  
    if(x && y) return x * y;
}
module.exports = {
    testFunction,
};
