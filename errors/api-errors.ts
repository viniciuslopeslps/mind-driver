class ApiError implements Error {
  name: string;
  message: string;
  stack?: string;
  httpCode: number;

  constructor( httpCode: number, name: string, message: string, stack?: string) {
    this.name = name;
    this.message = message;
    this.stack;
    this.httpCode = httpCode;
  }
}

export { ApiError }