export type GeneralID = string & { __id: "SingletonGeneral" };

export interface General {
  id: GeneralID;
  balance: number;
}
