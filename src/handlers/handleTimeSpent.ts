import * as vscode from "vscode";
import { StateManager } from "../state/stateManager";
import { retreiveTimeFromGlobalState } from "../state";

export function handleTimeSpent(
  state: StateManager,
  statusBarItem: vscode.StatusBarItem
) {
  const interval = setInterval(() => {
    retreiveTimeFromGlobalState(state).then((timeSpent) => {
      timeSpent += 1000; // increment timeSpent before writing it to the state

      const date = new Date(timeSpent);
      const hours = String(date.getHours() - 1).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      state.write(timeSpent).then(() => {
        statusBarItem.text = `${hours}:${minutes}:${seconds}`;
      });
    });
  }, 1000);

  return interval;
}
