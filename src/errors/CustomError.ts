export class CustomError extends Error {
  public code: string;

  constructor(code: string, message: string) {
    super(message);
    this.code = code;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}
