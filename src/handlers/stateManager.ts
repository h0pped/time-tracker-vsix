import * as vscode from "vscode";

export type StateManager = {
  read: () => {};
  write: (stamp: number) => Promise<void>;
};

export function stateManager(context: vscode.ExtensionContext): StateManager {
  return {
    read,
    write,
  };

  function read() {
    return {
      timeSpent: context.globalState.get("timeSpent"),
    };
  }

  async function write(newTimeSpent: number) {
    await context.globalState.update("timeSpent", newTimeSpent);
  }
}
