class ApiError extends Error {
  constructor(
    statusCode, // Define a parameter statusCode for the HTTP status code of the error
    message = "Something Went Wrong", // Define a parameter message for the error message, defaulting to "Something Went Wrong"
    errors = [], // Define a parameter errors for additional error details, defaulting to an empty array
    stack = "" // Define a parameter stack for the stack trace of the error, defaulting to an empty string
  ) {
    super(message); // Call the constructor of the Error class with the provided message

    this.statusCode = statusCode; // Assign the provided statusCode to the instance property statusCode
    this.data = null; // Initialize the instance property data to null
    this.message = message; // Assign the provided message to the instance property message
    this.success = false; // Initialize the instance property success to false
    this.errors = errors; // Assign the provided errors to the instance property errors

    if (stack) {
      this.stack = stack; // If stack is provided, assign it to the instance property stack
    } else {
      Error.captureStackTrace(this, this.constructor); // Otherwise, capture the stack trace of the error
    }
  }
}
