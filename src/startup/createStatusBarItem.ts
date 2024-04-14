import * as vscode from "vscode";

export function createStatusBarItem(context: vscode.ExtensionContext) {
  const myCommandId = "time-tracker.statusBarClick";

  context.subscriptions.push(
    vscode.commands.registerCommand(myCommandId, () => {})
  );

  const item = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );

  item.command = myCommandId;

  context.subscriptions.push(item);

  item.tooltip = `Time spent in vscode`;
  item.show();

  return item;
}
