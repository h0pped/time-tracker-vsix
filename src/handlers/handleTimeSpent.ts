import * as vscode from "vscode";
import { StateManager } from "./stateManager";
import { retreiveTimeFromGlobalState } from "../utils";

export function handleTimeSpent(
  state: StateManager,
  statusBarItem: vscode.StatusBarItem
) {
  setInterval(() => {
    retreiveTimeFromGlobalState(state).then((timeSpent) => {
      const date = new Date(timeSpent);
      const hours = String(date.getHours() - 1).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      state.write(timeSpent).then(() => {
        statusBarItem.text = `${hours}:${minutes}:${seconds}`;
        timeSpent += 1000;
      });
    });
  }, 1000);
}
