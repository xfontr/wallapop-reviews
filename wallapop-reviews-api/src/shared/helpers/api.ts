// TODO: Both Promises need to be separatedly try-catched
// TODO: Proper error handling (returning false is not enough)
export async function get<T>(href: string): Promise<T | false> {
  try {
    const response = await fetch(href);
    return response.ok ? ((await response.json()) as T) : false;
  } catch (error) {
    return false;
  }
}
