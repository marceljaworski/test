function testFunction(...args) {
    if(!Number.isInteger(args[0]) || args[0] === undefined) return false;
    if(args[0] && args[1] === undefined) return args[0] * args[0];
    if(arguments.length > 2) {
        let result = Array.from(arguments).reduce(
            (acc, cur) => acc * cur, 1
            );
        return result;
    }  
    if(args[0] && args[1]) return args[0] * args[1];
};

function hypotenuse( ...args ) {
    if(args !== 2) return false;
    const c = Math.sqrt(Math.pow(args[0]) + Math.pow(args[1]))
    return c
}
module.exports = {
    testFunction,
    hypotenuse
};

