import * as vscode from "vscode";

export function createStatusBarItem(context: vscode.ExtensionContext) {
  const myCommandId = "time-tracker.statusBarClick";

  //   context.subscriptions.push(
  //     vscode.commands.registerCommand(myCommandId, async () => {
  //       const pageType = await vscode.window.showQuickPick(
  //         ["shell", "fetch rows, list in table"],
  //         { placeHolder: "select type of web page to make" }
  //       );
  //     })
  //   );

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
