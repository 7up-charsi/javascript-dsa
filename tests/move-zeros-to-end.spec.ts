import { describe, expect, it } from "vitest";
import { moveZerosToEndOfArray } from "../src/move-zeros-to-end";

describe("moveZerosToEndOfArray", () => {
	it("should move all zeros to the end while preserving relative order", () => {
		const nums = [0, 1, 0, 3, 12];
		const expected = [1, 3, 12, 0, 0];
		// The function modifies 'nums' in place, so we check the array reference
		moveZerosToEndOfArray(nums);
		expect(nums).toEqual(expected);
	});

	it("should handle an array with no zeros", () => {
		const nums = [1, 2, 3, 4];
		const expected = [1, 2, 3, 4];
		moveZerosToEndOfArray(nums);
		expect(nums).toEqual(expected);
	});

	it("should handle an array with only zeros", () => {
		const nums = [0, 0, 0];
		const expected = [0, 0, 0];
		moveZerosToEndOfArray(nums);
		expect(nums).toEqual(expected);
	});
});
