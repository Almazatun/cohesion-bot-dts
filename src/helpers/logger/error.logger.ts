export function errorLogger(command: string, errorMessage: string) {
  console.log(`Command:${command} \n------------------------->${errorMessage}`);
}
