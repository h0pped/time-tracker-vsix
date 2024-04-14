export const stopTimeSpent = (intervalId: NodeJS.Timeout) => {
  clearInterval(intervalId);
};
