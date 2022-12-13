// Aufgabe 1.

const { testFunction, hypotenuse } = require("./index");

test("ist eine Funktion", () => {
    expect(testFunction).toBeInstanceOf(Function);
})
//1. Werden keine Argumente übergeben, soll die Funktion "false" zurückgeben.
test("sind Argumente ubergeben?", () => {
    expect(testFunction(undefined)).toBe(false);
})
//2. Wird ein Argument übergeben, soll es mit sich selbst multipliziert und das Ergebnis zurückgegeben werden (a * a).
test("gibt einArgument? mulpliziert sich selbst", () => {
    expect(testFunction(2)).toBe(4)
})
//3. Ist das Argument keine ganze Zahl (Integer), soll "false" zurückgegeben werden.
test("ist einArgument Integer", () => {
    expect(testFunction(3.2)).toBe(false)
})
//4. Werden zwei Argumente übergeben, sollen sie multipliziert und das Ergebnis zurückgegeben werden (a * b).
test("gibt zwei Argument? multiplizert beides", () => {
    expect(testFunction(3, 2)).toBe(6)
})
//5. Werden beliebig viele Argumente übergeben, sollen sie alle multipliziert und das Ergebnis zurückgegeben werden (a * b * c * ...).
test("mehr als zwei Argument? multipliziert alles", () => {
    expect(testFunction(2, 2, 2)).toBe(8)
})

// Aufgabe 2.
describe("theoremePythogoras", () => {
    test("ist eine Funktion", () => {
        expect(hypotenuse).toBeInstanceOf(Function);
    })
   
    test("1. zweiArgumente", () => {
        expect(hypotenuse(undefined, undefined)).toBe(false);
    })
    test("2. sindPositiv", () => {
        expect(hypotenuse(Number, Number)).toBe(Number > 0, Number > 0)
    })
    // test("3. a^2 + b^2 = c^2", () => {
    //     expect(hypotenuse()).toBe(c)
    // })
})