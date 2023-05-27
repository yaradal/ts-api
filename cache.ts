import { createClient, RedisClientType } from "redis";

let redisCache: RedisClientType;

export async function redisConnect() {
  redisCache = createClient();
  redisCache.on("error", (err) => console.log("Redis Client Error", err));
  await redisCache.connect();
}

export async function redisDisconnect() {
  if (redisCache) {
    await redisCache.disconnect();
  }
}

export async function getFromCache(key: string): Promise<string | null> {
  return await redisCache.get(key);
}

export async function setToCache(key: string, value: string) {
  await redisCache.set(key, value);
}
