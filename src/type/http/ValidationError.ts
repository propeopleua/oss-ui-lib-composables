export class ValidationError extends Error {
  public errors: Record<string, string> = {};
}
