import capitalize from "./capitalize";

test("Single letter", () => {
    expect(capitalize('a')).toBe('A');
});

test("Multiple letters", () => {
    expect(capitalize('abc')).toBe('Abc');
});

test("Word", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("Sentence", () => {
    expect(capitalize('hello, world')).toBe('Hello, world');
});