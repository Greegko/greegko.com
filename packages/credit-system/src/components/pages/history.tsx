import { For } from "solid-js";

import { useDexieArrayQuery } from "@greegko/core";

import { db } from "../../db/db";

export const HistoryPage = () => {
  const questsHistory = useDexieArrayQuery(() => db.history.toArray());

  return (
    <div>
      History Page
      <div>
        <For each={questsHistory}>{questEntry => <div>{questEntry.questId}</div>}</For>
      </div>
    </div>
  );
};
