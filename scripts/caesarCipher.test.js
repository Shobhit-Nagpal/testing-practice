import expect from "expect";
import caesarCipher from "./caesarCipher";

test("A beomes C with 2", () => {
    expect(caesarCipher('A',2)).toBe('C');
});

test("Z beomes A with 1", () => {
    expect(caesarCipher('Z',1)).toBe('A');
});

test("Z beomes B with 2", () => {
    expect(caesarCipher('Z',2)).toBe('B');
});

test("Y beomes A with 2", () => {
    expect(caesarCipher('Y',2)).toBe('A');
});

test("Y beomes B with 3", () => {
    expect(caesarCipher('Y',3)).toBe('B');
});


test("a beomes d with 3", () => {
    expect(caesarCipher('a',3)).toBe('d');
});


test("String of characters", () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz',1)).toBe('bcdefghijklmnopqrstuvwxyza');
});

test("Sentence", () => {
    expect(caesarCipher("attack at dawn", 5)).toBe("fyyfhp fy ifbs");
});

test("Different cases", () => {
    expect(caesarCipher("AbCd",2)).toBe("CdEf");
});