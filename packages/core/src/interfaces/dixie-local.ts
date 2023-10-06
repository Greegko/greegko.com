import Dixie, { Table } from "dexie";

export interface DexieDB {
  tables: Record<string, { id?: string & { __id: string } }>;
}

type ArrayType<T> = T extends (infer R)[] ? R : T;

type DixieTables<Schema extends DexieDB> = {
  [Key in keyof Schema["tables"]]: Table<ArrayType<Schema["tables"][Key]>>;
};

export type DexieLocal<Schema extends DexieDB> = Dixie & DixieTables<Schema>;
