import { describe, expect, it } from "vitest";
import {
	reverseArrayNative,
	reverseArrayWith2Pointers,
	reverseArrayWithNewArray,
} from "../src/reverse-array.ts";

const implementations = {
	native: reverseArrayNative,
	twoPointers: reverseArrayWith2Pointers,
	newArray: reverseArrayWithNewArray,
};

describe("Reverse Array - Extended Tests", () => {
	for (const [name, fn] of Object.entries(implementations)) {
		describe(`${name} implementation`, () => {
			it("should reverse a numeric array", () => {
				expect(fn([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
			});

			it("should reverse a string array", () => {
				expect(fn(["a", "b", "c"])).toEqual(["c", "b", "a"]);
			});

			it("should reverse a mixed array", () => {
				expect(fn([1, "2", 3, "4"])).toEqual(["4", 3, "2", 1]);
			});

			it("should reverse an array with nested arrays", () => {
				expect(fn([1, [2, 3], 4])).toEqual([4, [2, 3], 1]);
			});

			it("should reverse an empty array", () => {
				expect(fn([])).toEqual([]);
			});

			it("should reverse an array with one element", () => {
				expect(fn([42])).toEqual([42]);
			});

			it("should reverse an array with repeated elements", () => {
				expect(fn([1, 1, 2, 2, 3, 3])).toEqual([3, 3, 2, 2, 1, 1]);
			});

			it("should not modify the original array for native and newArray", () => {
				if (name !== "twoPointers") {
					const arr = [1, 2, 3];
					const copy = [...arr];
					fn(arr);
					expect(arr).toEqual(copy);
				}
			});

			it("should modify the original array for twoPointers", () => {
				if (name === "twoPointers") {
					const arr = [1, 2, 3];
					fn(arr);
					expect(arr).toEqual([3, 2, 1]);
				}
			});
		});
	}
});
