export enum HttpMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

export enum HttpStatus {
    Ok = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,

    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    RequestTimeout = 408,
    Conflict = 409,
    Gone = 410,

    InternalServerError = 500,
    NotImplemented = 501,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504,
};

const descriptions = new Map<number, string>([
    [HttpStatus.Ok, 'Ok'],
    [HttpStatus.Created, 'Created'],
    [HttpStatus.Accepted, 'Accepted'],
    [HttpStatus.NoContent, 'NoContent'],

    [HttpStatus.BadRequest, 'BadRequest'],
    [HttpStatus.Unauthorized, 'Unauthorized'],
    [HttpStatus.Forbidden, 'Forbidden'],
    [HttpStatus.NotFound, 'NotFound'],
    [HttpStatus.RequestTimeout, 'RequestTimeout'],
    [HttpStatus.Conflict, 'Conflict'],

    [HttpStatus.InternalServerError, 'InternalServerError'],
    [HttpStatus.NotImplemented, 'NotImplemented'],
    [HttpStatus.BadGateway, 'BadGateway'],
    [HttpStatus.ServiceUnavailable, 'ServiceUnavailable'],
    [HttpStatus.GatewayTimeout, 'GatewayTimeout']
]);

export const HttpStatusLabel = (httpStatus: HttpStatus): string => descriptions.get(httpStatus) ?? '';
