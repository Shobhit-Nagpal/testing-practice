import expect from "expect";
import analyzeArray from "./analyzeArray";

test("Takes in array and gives object", () => {
    const object = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
      };
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(object);
});

test("Returns null if array is not passed", () => {
    expect(analyzeArray(1,2)).toBeNull();
});