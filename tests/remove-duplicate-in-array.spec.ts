import { describe, expect, it } from "vitest";
import {
	removeDuplicateInArrayFilter,
	removeDuplicateInArrayLoop,
	removeDuplicateInArraySet,
} from "../src/remove-duplicate-in-array";

const implementations = [
	{ name: "Set" as const, fn: removeDuplicateInArraySet },
	{ name: "Filter" as const, fn: removeDuplicateInArrayFilter },
	{ name: "Loop" as const, fn: removeDuplicateInArrayLoop },
];

describe("removeDuplicateInArray tests", () => {
	implementations.forEach(({ name, fn }) => {
		describe(`${name} implementation`, () => {
			it("should return empty array for empty input", () => {
				expect(fn([])).toEqual([]);
			});

			it("should return the same single-element array", () => {
				expect(fn([5])).toEqual([5]);
			});

			it("should remove duplicates in normal array", () => {
				const arr = [1, 2, 3, 2, 4, 1, 5];
				expect(fn(arr)).toEqual([1, 2, 3, 4, 5]);
			});

			it("should remove duplicates when all elements are equal", () => {
				const arr = [7, 7, 7, 7];
				expect(fn(arr)).toEqual([7]);
			});

			it("should keep order for first occurrence", () => {
				const arr = [3, 1, 2, 3, 2, 1];
				expect(fn(arr)).toEqual([3, 1, 2]);
			});

			it("should ignore non-number values for Loop implementation", () => {
				if (name === "Loop") {
					const arr = [1, "a", 2, 1, null, 2];
					expect(fn(arr)).toEqual([1, 2]);
				}
			});

			it("should work with negative numbers", () => {
				const arr = [1, -1, 2, -1, 3, 2];
				expect(fn(arr)).toEqual([1, -1, 2, 3]);
			});
		});
	});
});
