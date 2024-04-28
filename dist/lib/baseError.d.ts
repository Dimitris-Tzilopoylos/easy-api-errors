export = BaseError;
declare class BaseError extends Error {
    constructor(name: any, message: any, status: any);
    name: any;
    status: any;
}
