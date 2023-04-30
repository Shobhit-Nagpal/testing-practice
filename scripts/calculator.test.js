import calculator from "./calculator";

test("Add 2 numbers", () => {

    const calc = calculator();
    expect(calc.add(1,2)).toBe(3);

});


test("Subtract 2 numbers", () => {

    const calc = calculator();
    expect(calc.subtract(2,1)).toBe(1);

});

test("Multiply 2 numbers", () => {
    const calc = calculator();
    expect(calc.multiply(6,5)).toBe(30);
});

test("Divide 2 numbers", () => {
    const calc = calculator();
    expect(calc.divide(3,2)).toBe(1.5);
});