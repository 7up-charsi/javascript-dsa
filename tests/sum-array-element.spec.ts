import { describe, expect, it } from "vitest";
import {
	sumArrayElementsLoop,
	sumArrayElementsReduc,
} from "../src/sum-array-elements";

const implementations = [
	{ name: "Loop", fn: sumArrayElementsLoop },
	{ name: "Reduce", fn: sumArrayElementsReduc },
];

describe("sumArrayElements tests", () => {
	implementations.forEach(({ name, fn }) => {
		describe(`${name} implementation`, () => {
			it("should return 0 for empty array", () => {
				expect(fn([])).toBe(0);
			});

			it("should return the single element for single-element array", () => {
				expect(fn([5])).toBe(5);
			});

			it("should correctly sum positive numbers", () => {
				expect(fn([1, 2, 3, 4, 5])).toBe(15);
			});

			it("should correctly sum negative numbers", () => {
				expect(fn([-1, -2, -3, -4, -5])).toBe(-15);
			});

			it("should correctly sum mixed positive and negative numbers", () => {
				expect(fn([1, -2, 3, -4, 5])).toBe(3);
			});

			it("should correctly sum arrays with duplicates", () => {
				expect(fn([2, 2, 3, 3, 1, 1])).toBe(12);
			});
		});
	});
});
