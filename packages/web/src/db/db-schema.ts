export interface Quest {
  id?: number;
  name: string;
}

export interface History {
  id?: number;
  questId?: number;
  timeStamp: string;
}
