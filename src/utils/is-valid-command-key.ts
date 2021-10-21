export function isValidCommandKey(
  allCommandsKeysList: {[key: string]: string},
  userTypeCommandKey: string,
) {
  const result = Object.entries(allCommandsKeysList).map(
    ([key]) => key,
  ).includes(userTypeCommandKey);

  return result;
}
