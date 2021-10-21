export function isIncludeCommandSymbol(userMessage: string): boolean {
  return userMessage.trim().charAt(0) === '>';
}
