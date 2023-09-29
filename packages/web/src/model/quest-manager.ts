import { db } from "../db/db";
import { GeneralID, Quest } from "../interfaces";

export const GeneralTableEntryID = "SingletonGeneral" as GeneralID;

export class QuestManager {
  addQuestEntry(quest: Quest, units?: number) {
    db.history.add({
      questId: quest.id!,
      date: new Date().toISOString(),
      units,
    });

    this.updateBalance(quest.credit * (units || 1));
  }

  async updateBalance(shiftBalance: number) {
    const generalTable = await db.general.get(GeneralTableEntryID);

    db.general.update(GeneralTableEntryID, { balance: generalTable!.balance + shiftBalance });
  }
}

export const questManager = new QuestManager();
