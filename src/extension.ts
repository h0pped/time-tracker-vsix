// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { createStatusBarItem } from "./startup/";
import { handleTimeSpent, stateManager } from "./handlers";
import { retreiveTimeFromGlobalState } from "./utils/retreiveTimeFromGlobalState";

export async function activate(context: vscode.ExtensionContext) {
  const state = stateManager(context);

  // const timeSpent = await retreiveTimeFromGlobalState(state);

  let statusBarItem = createStatusBarItem(context);

  handleTimeSpent(state, statusBarItem);
}

export function deactivate() {}
