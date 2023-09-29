import { Dexie } from "dexie";
import DexieRelationships from "dexie-relationships";

import { QuestType } from "../interfaces";
import { GeneralTableEntryID } from "../model/quest-manager";
import { GeneralTable, HistoryTable, QuestTable } from "./db-schema";
import { DexieLocal } from "./dixie-local";

interface CreditSystemDb {
  tables: { quests: QuestTable; history: HistoryTable; general: GeneralTable };
}

export const db = new Dexie("CreditSystemDb", { addons: [DexieRelationships as any] }) as DexieLocal<CreditSystemDb>;

db.version(1).stores({
  quests: "++id",
  history: "++id, questId -> quests.id",
  general: "id",
});

db.on("populate", () => {
  db.quests.bulkAdd([
    { name: "Reading", credit: 1, type: QuestType.Unit },
    { name: "Chore", credit: 1, type: QuestType.Unit },
    { name: "Voice training", credit: 1, type: QuestType.Unit },
    { name: "Project", credit: 1, type: QuestType.Unit },
    { name: "Non Focused Project", credit: 0.5, type: QuestType.Unit },
    { name: "Drawing", credit: 1, type: QuestType.Unit },
    { name: "French", credit: 1, type: QuestType.Unit },
    { name: "Gaming", credit: -1, type: QuestType.Unit },
    { name: "Netflix", credit: -1, type: QuestType.Unit },
    { name: "Brush teeth", credit: 1, type: QuestType.Unit },
    { name: "Beard grower", credit: 1, type: QuestType.Unit },

    { name: "Meditation", credit: 3, type: QuestType.Task },
    { name: "Cooking", credit: 3, type: QuestType.Task },
    { name: "Sport", credit: 3, type: QuestType.Task },
    { name: "Daily Review", credit: 3, type: QuestType.Task },

    { name: "Wake up at 8am", credit: 3, type: QuestType.Task },
    { name: "Have lunch 12pm-2pm ", credit: 3, type: QuestType.Task },
    { name: "Have dinner 7pm - 9pm", credit: 3, type: QuestType.Task },
    { name: "Mounting a furniture", credit: 5, type: QuestType.Task },
  ]);

  db.general.add({
    id: GeneralTableEntryID,
    balance: -158.5,
  });
});
