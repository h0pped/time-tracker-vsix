import * as vscode from "vscode";
import { StateManager } from "../state/stateManager";
import { retreiveTimeFromGlobalState } from "../state";
import { formatPadTime } from "../utils/formatPadTime";

const ONE_SECOND = 1000;

const updateTimeSpent = async (
  state: StateManager,
  statusBarItem: vscode.StatusBarItem
) => {
  try {
    let timeSpent = await retreiveTimeFromGlobalState(state);

    timeSpent += ONE_SECOND;

    const hours = formatPadTime(Math.floor(timeSpent / 3600000));
    const minutes = formatPadTime(Math.floor((timeSpent % 3600000) / 60000));
    const seconds = formatPadTime(Math.floor((timeSpent % 60000) / 1000));

    await state.write(timeSpent);

    statusBarItem.text = `${hours}:${minutes}:${seconds}`;
  } catch (error) {
    console.error("Time tracker: error handling spent time: ", error);
  }
};

export function handleTimeSpent(
  state: StateManager,
  statusBarItem: vscode.StatusBarItem
) {
  const interval = setInterval(
    updateTimeSpent,
    ONE_SECOND,
    state,
    statusBarItem
  );

  return interval;
}
