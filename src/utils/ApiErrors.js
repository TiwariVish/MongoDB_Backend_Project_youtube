class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something Went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      // ✅ Fixed line
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
