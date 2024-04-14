// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { createStatusBarItem } from "./startup/";
import { handleTimer } from "./handlers";
import { stateManager } from "./state";

export async function activate(context: vscode.ExtensionContext) {
  const state = stateManager(context);

  let statusBarItem = createStatusBarItem(context);

  handleTimer(state, statusBarItem);
}

export function deactivate() {}
