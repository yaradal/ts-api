const cache = new Map<string, string>();

export function getFromCache(key: string): string | undefined {
  return cache.get(key);
}

export function setToCache(key: string, value: string) {
  cache.set(key, value);
}
