import { IndexableType } from "dexie";

declare module "dexie" {
  interface Table<T = any, TKey = IndexableType> {
    with(objects: Record<string, string>): Promise<T[]>;
  }
}
