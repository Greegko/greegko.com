import { For } from "solid-js";

import { db } from "../../db/db";
import { useDexieArrayQuery } from "../../hooks/dexie";

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
