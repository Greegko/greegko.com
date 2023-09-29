import { For } from "solid-js";

import { db } from "../../../db/db";
import { useDexieArrayQuery } from "../../../hooks/dexie";
import { QuestDisplay } from "./quests-display";

export const QuestsPage = () => {
  const quests = useDexieArrayQuery(() => db.quests.toArray());

  return (
    <div>
      <div class="flex">
        <span class="flex-1">Quests</span>

        <span class="flex-none">
          <sl-button>
            <sl-icon prop:name="plus"></sl-icon>
          </sl-button>
        </span>
      </div>
      <div>
        <For each={quests}>{quest => <QuestDisplay quest={quest}></QuestDisplay>}</For>
      </div>
    </div>
  );
};
