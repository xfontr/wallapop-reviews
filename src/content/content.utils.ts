export function findResource(startsWith: string): PerformanceEntry | undefined {
  return performance
    .getEntriesByType("resource")
    .find(({ name }) => name.startsWith(startsWith));
}

export function sleep(time = 500) {
  return new Promise((r) => setTimeout(r, time));
}
