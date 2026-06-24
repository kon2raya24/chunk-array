import { describe, it, expect } from "vitest";
import { groupBy } from "../groupby";

describe("groupBy", () => {
  it("should be a function", () => {
    expect(typeof groupBy).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => groupBy(null as any)).toThrow();
  });
});
