import reverseString from "./reverString";


test("Single etter", () => {
    expect(reverseString('h')).toBe('h');
});

test("Multiple letters", () => {
    expect(reverseString('ho')).toBe('oh');
});

test("Word", () => {
    expect(reverseString('hello')).toBe('olleh');
});

test("Sentence", () => {
    expect(reverseString('hello, world')).toBe('dlrow ,olleh');
});