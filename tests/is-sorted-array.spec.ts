import { describe, expect, it } from "vitest";
import {
	isArraySortedAscending,
	isArraySortedDescending,
} from "../src/is-array-sorted";

describe("isArraySortedAscending", () => {
	it("returns true for empty array", () => {
		expect(isArraySortedAscending([])).toBe(true);
	});

	it("returns true for single-element array", () => {
		expect(isArraySortedAscending([5])).toBe(true);
	});

	it("returns true for already sorted ascending arrays", () => {
		expect(isArraySortedAscending([1, 2, 3, 4, 5])).toBe(true);
		expect(isArraySortedAscending([-3, 0, 2, 7])).toBe(true);
	});

	it("returns false for unsorted arrays", () => {
		expect(isArraySortedAscending([1, 3, 2, 4])).toBe(false);
		expect(isArraySortedAscending([5, 4, 3, 2, 1])).toBe(false);
	});

	it("returns true for arrays with duplicate numbers", () => {
		expect(isArraySortedAscending([1, 2, 2, 3])).toBe(true);
		expect(isArraySortedAscending([1, 1, 1, 1])).toBe(true);
	});
});

describe("isArraySortedDescending", () => {
	it("returns false for empty array", () => {
		expect(isArraySortedDescending([])).toBe(false);
	});

	it("returns true for single-element array", () => {
		expect(isArraySortedDescending([5])).toBe(true);
	});

	it("returns true for already sorted descending arrays", () => {
		expect(isArraySortedDescending([5, 4, 3, 2, 1])).toBe(true);
		expect(isArraySortedDescending([7, 2, 0, -3])).toBe(true);
	});

	it("returns false for unsorted arrays", () => {
		expect(isArraySortedDescending([1, 2, 3, 4])).toBe(false);
		expect(isArraySortedDescending([1, 3, 2, 4])).toBe(false);
	});

	it("returns true for arrays with duplicate numbers", () => {
		expect(isArraySortedDescending([3, 2, 2, 1])).toBe(true);
		expect(isArraySortedDescending([1, 1, 1, 1])).toBe(true);
	});
});
