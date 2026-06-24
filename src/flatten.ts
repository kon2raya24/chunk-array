
// Type exports for consumers
// Add specific types as needed
/**
 * flatten<T>
 * @param arr
 */
export function flatten<T>(arr: (T | T[])[]): T[] {
  if (arr === null || arr === undefined) throw new Error("Invalid input");
  return arr.reduce<T[]>((acc, val) => acc.concat(val), []);
}
