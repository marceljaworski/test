// Aufgabe 1.

const { testFunction } = require("./index");

test("ist eine Funktion", () => {
    expect(testFunction).toBeInstanceOf(Function);
})
//1. Werden keine Argumente übergeben, soll die Funktion "false" zurückgeben.
test("sind Argumente ubergeben?", () => {
    expect(testFunction(undefined)).toBe(false);
})
//2. Wird ein Argument übergeben, soll es mit sich selbst multipliziert und das Ergebnis zurückgegeben werden (a * a).
test("gibt einArgument, die mulpliziert sichselbst", () => {
    expect(testFunction(2)).toBe(4)
})
//3. Ist das Argument keine ganze Zahl (Integer), soll "false" zurückgegeben werden.
test("ist einArgument Integer", () => {
    expect(testFunction(1.2)).toBe(false)
})
//4. Werden zwei Argumente übergeben, sollen sie multipliziert und das Ergebnis zurückgegeben werden (a * b).
test("gibt zwei Argument? multiplizert beides", () => {
    expect(testFunction(3, 2)).toBe(6)
})