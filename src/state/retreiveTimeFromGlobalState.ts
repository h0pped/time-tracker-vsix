import { StateManager } from "./stateManager";

export const retreiveTimeFromGlobalState = async (
  state: StateManager
): Promise<number> => {
  let { timeSpent = 0 } = <{ timeSpent: number }>state.read();

  if (!timeSpent) {
    await state.write(0);
  }

  return timeSpent;
};
