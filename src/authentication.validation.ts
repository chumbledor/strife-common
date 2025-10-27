const MinimumPasswordLength = 8;
export function validatePassword(password: string): Error | undefined {
  if (password.length < MinimumPasswordLength)
    return new Error(`Password is invalid. A password must contain at least ${MinimumPasswordLength} characters.`);

  return undefined;
}