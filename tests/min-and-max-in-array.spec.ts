import { describe, expect, it } from "vitest";
import {
	minAndMaxInArrayLoop,
	minAndMaxInArrayNative,
	minAndMaxInArrayReduce,
} from "../src/min-and-max-in-array";

const implementations = [
	{ name: "Native", fn: minAndMaxInArrayNative },
	{ name: "Loop", fn: minAndMaxInArrayLoop },
	{ name: "Reduce", fn: minAndMaxInArrayReduce },
];

describe("minAndMaxInArray tests", () => {
	implementations.forEach(({ name, fn }) => {
		describe(`${name} implementation`, () => {
			it("should return null for empty array", () => {
				expect(fn([])).toBeNull();
			});

			it("should return correct min/max for single-element array", () => {
				expect(fn([5])).toEqual({ min: 5, max: 5 });
			});

			it("should return correct min/max for normal array", () => {
				const arr = [3, 1, 4, 2, 5];
				expect(fn(arr)).toEqual({ min: 1, max: 5 });
			});

			it("should work with negative numbers", () => {
				const arr = [-5, -1, -10, 0, 7];
				expect(fn(arr)).toEqual({ min: -10, max: 7 });
			});

			it("should work with duplicates", () => {
				const arr = [2, 2, 3, 3, 1, 1];
				expect(fn(arr)).toEqual({ min: 1, max: 3 });
			});

			it("should work with all equal elements", () => {
				const arr = [7, 7, 7, 7];
				expect(fn(arr)).toEqual({ min: 7, max: 7 });
			});
		});
	});
});
