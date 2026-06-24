import { describe, it, expect } from "vitest";
import { unique } from "../unique";

describe("unique", () => {
  it("should be a function", () => {
    expect(typeof unique).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => unique(null as any)).toThrow();
  });
});
