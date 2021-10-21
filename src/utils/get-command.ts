export function getCommand(userMessage: string, indexWord: number = 0): string {
  const messages = [...userMessage];
  messages.shift();
  return messages.join('').split(' ')[indexWord];
}
