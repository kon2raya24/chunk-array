/**
 * flatten<T>
 * @param arr
 */
export function flatten<T>(arr: (T | T[])[]): T[] {
  return arr.reduce<T[]>((acc, val) => acc.concat(val), []);
}
