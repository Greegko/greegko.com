import { Dexie } from "dexie";
import DexieRelationships from "dexie-relationships";

import { History, Quest } from "./db-schema";
import { DexieLocal } from "./dixie-local";

interface CreditSystemDb {
  tables: { quests: Quest; history: History };
}

export const db = new Dexie("CreditSystemDb", { addons: [DexieRelationships as any] }) as DexieLocal<CreditSystemDb>;

db.version(1).stores({
  quests: "++id",
  history: "++id, questId -> quests.id",
});
