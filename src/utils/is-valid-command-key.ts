export function isValidCommandKey<T>(
  allCommandsKeysList: {[key: string]: string | T},
  userTypeCommandKey: string,
): boolean {
  const result = Object.entries(allCommandsKeysList)
    .map(([key]) => key)
    .includes(userTypeCommandKey);

  return result;
}
