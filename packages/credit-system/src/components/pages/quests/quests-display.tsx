import { Show } from "solid-js";

import { Quest, QuestType } from "../../../interfaces";
import { questManager } from "../../../model/quest-manager";

type SaveEvent = (credit?: number) => void;

export const QuestDisplay = (props: { quest: Quest }) => {
  const save: SaveEvent = (credit?: number) => {
    if (props.quest.type === QuestType.Unit) {
      questManager.addQuestEntry(props.quest, credit);
    } else {
      questManager.addQuestEntry(props.quest);
    }
  };

  return (
    <div>
      <Show when={props.quest.type === QuestType.Unit}>
        <QuestUnit quest={props.quest} save={save} />
      </Show>
      <Show when={props.quest.type === QuestType.Task}>
        <QuestTask quest={props.quest} save={save} />
      </Show>
    </div>
  );
};

const QuestUnit = (props: { quest: Quest; save: SaveEvent }) => {
  return (
    <>
      {props.quest.name}
      <sl-button prop:size="small" onClick={() => props.save(1)}>
        +1
      </sl-button>
    </>
  );
};

const QuestTask = (props: { quest: Quest; save: SaveEvent }) => {
  return <sl-checkbox on:sl-change={() => props.save()}>{props.quest.name}</sl-checkbox>;
};
