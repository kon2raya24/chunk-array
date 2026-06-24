
// Type exports for consumers
// Add specific types as needed
/**
 * unique<T>
 * @param arr
 */
export function unique<T>(arr: T[]): T[] {
  if (arr === null || arr === undefined) throw new Error("Invalid input");
  return [...new Set(arr)];
}
