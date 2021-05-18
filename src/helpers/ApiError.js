
const ResponseStatus = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500
}

export class ApiError extends Error {
  constructor(status, message) {
    super()
    this.status = status
    this.message = { error: message }
  }

  static handle(err, res) {
    return res.status(err.status).json(err.message)
  }
}

export class InternalError extends ApiError {
  constructor(message = 'Internal error') {
    super(ErrorType.INTERNAL, message);
  }
}

export class BadRequestError extends ApiError {
  constructor(message = 'Bad request error') {
    super(ResponseStatus.BAD_REQUEST, message)
  }
}

export class NotFoundError extends ApiError {
  constructor(message = 'Not found error') {
    super(ResponseStatus.NOT_FOUND, message)
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message = 'Unauthorized error') {
    super(ResponseStatus.UNAUTHORIZED, message)
  }
}