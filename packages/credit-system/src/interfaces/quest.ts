export type QuestID = string & { __id: "QuestID" };

export enum QuestType {
  Unit,
  Task,
}

export enum QuestRefreshPeriod {
  None,
  Daily,
}

interface QuestBase {
  id?: QuestID;
  name: string;
  type: QuestType;
  credit: number;
}

export type QuestTask = QuestBase & {
  type: QuestType.Task;
  refreshPeriod?: QuestRefreshPeriod;
};

export type QuestUnit = QuestBase & {
  type: QuestType.Unit;
};

export type Quest = QuestTask | QuestUnit;

export type QuestEntryID = string & { __id: "QuestEntryID" };
export interface QuestEntry {
  id?: QuestEntryID;
  questId: QuestID;
  date: string;
  units?: number;
}
