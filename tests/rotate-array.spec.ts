import { describe, expect, it } from "vitest";
import {
	rorateArraySimpleLeftSide,
	rotateArrayLeftSide,
	rotateArrayRightSide,
} from "../src/rotate-array";

describe("Array rotation tests", () => {
	describe("rorateArraySimpleLeftSide", () => {
		it("rotates one step left", () => {
			expect(rorateArraySimpleLeftSide([1, 2, 3, 4, 5])).toEqual([
				2, 3, 4, 5, 1,
			]);
		});

		it("works with single-element array", () => {
			expect(rorateArraySimpleLeftSide([1])).toEqual([1]);
		});

		it("works with empty array", () => {
			expect(rorateArraySimpleLeftSide([])).toEqual([]);
		});
	});

	describe("rotateArrayLeftSide", () => {
		it("rotates multiple steps left", () => {
			expect(rotateArrayLeftSide([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 1, 2]);
			expect(rotateArrayLeftSide([1, 2, 3, 4, 5], 4)).toEqual([5, 1, 2, 3, 4]);
		});

		it("rotates steps larger than array length", () => {
			expect(rotateArrayLeftSide([1, 2, 3, 4, 5], 7)).toEqual([3, 4, 5, 1, 2]); // 7 % 5 = 2
		});

		it("rotation zero or multiple of length returns same array", () => {
			expect(rotateArrayLeftSide([1, 2, 3], 0)).toEqual([1, 2, 3]);
			expect(rotateArrayLeftSide([1, 2, 3], 3)).toEqual([1, 2, 3]);
		});

		it("works with single-element or empty array", () => {
			expect(rotateArrayLeftSide([1], 5)).toEqual([1]);
			expect(rotateArrayLeftSide([], 2)).toEqual([]);
		});
	});

	describe("rotateArrayRightSide", () => {
		it("rotates multiple steps right", () => {
			expect(rotateArrayRightSide([1, 2, 3, 4, 5], 1)).toEqual([5, 1, 2, 3, 4]);
			expect(rotateArrayRightSide([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5, 1, 2]);
		});

		it("rotates steps larger than array length", () => {
			expect(rotateArrayRightSide([1, 2, 3, 4, 5], 8)).toEqual([3, 4, 5, 1, 2]); // 8 % 5 = 3
		});

		it("rotation zero or multiple of length returns same array", () => {
			expect(rotateArrayRightSide([1, 2, 3], 0)).toEqual([1, 2, 3]);
			expect(rotateArrayRightSide([1, 2, 3], 3)).toEqual([1, 2, 3]);
		});

		it("works with single-element or empty array", () => {
			expect(rotateArrayRightSide([1], 5)).toEqual([1]);
			expect(rotateArrayRightSide([], 2)).toEqual([]);
		});
	});
});
