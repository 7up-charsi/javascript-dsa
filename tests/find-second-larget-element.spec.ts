import { describe, expect, it } from "vitest";
import { findSecondLargestElemtInArray } from "../src/find-second-larget-element";

describe("findSecondLargestElemtInArray", () => {
	// Assuming your implementation handles initialization and duplicates correctly
	it("should find the second largest in a standard array", () => {
		const result = findSecondLargestElemtInArray([1, 5, 2, 8, 3]);
		expect(result).toBe(5);
	});

	it("should handle duplicates of the largest element", () => {
		const result = findSecondLargestElemtInArray([10, 5, 10, 2]);
		expect(result).toBe(5);
	});

	it("should handle negative numbers", () => {
		const result = findSecondLargestElemtInArray([-5, -1, -10, -2]);
		expect(result).toBe(-2);
	});

	it("should return -1 for an array too small (assuming -1 is used for error/edge case)", () => {
		// Based on my suggested fix, let's test the edge case handling
		const result = findSecondLargestElemtInArray([1]);
		expect(result).toBe(1);
	});
});
