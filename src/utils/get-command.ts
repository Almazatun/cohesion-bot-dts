export function getCommand(userMessage: string, index: number = 0): string {
  const messages = [...userMessage];
  messages.shift();
  return messages.join('').split(' ')[index];
}
