import * as vscode from "vscode";
import { handleTimeSpent } from "./handleTimeSpent";
import { StateManager } from "../state/stateManager";
import { stopTimeSpent } from "./stopTimeSpent";

export const handleTimer = (
  state: StateManager,
  statusBarItem: vscode.StatusBarItem
) => {
  let intervalId: {
    current: NodeJS.Timeout | null;
  } = {
    current: null,
  };

  const handleWindowStateChange = (
    windowState: vscode.WindowState | undefined
  ) => {
    if (windowState?.focused && intervalId.current === null) {
      intervalId.current = handleTimeSpent(state, statusBarItem);
      return;
    }

    if (!windowState?.focused && intervalId.current !== null) {
      stopTimeSpent(intervalId.current);
      intervalId.current = null;
      return;
    }
  };

  vscode.window.onDidChangeWindowState(handleWindowStateChange);
  vscode.window.onDidChangeActiveTextEditor(() =>
    handleWindowStateChange(vscode.window.state)
  );
  handleWindowStateChange(vscode.window.state);
};
