import { Dexie } from "dexie";
import DexieRelationships from "dexie-relationships";

import { DexieDB, DexieLocal } from "../interfaces";

export const createDbConnection = <DatabaseScheme extends DexieDB>(dbID: string) =>
  new Dexie(dbID, { addons: [DexieRelationships as any] }) as DexieLocal<DatabaseScheme>;
