export class AuthorizationError   extends Error {
    constructor(status , message){
        super(),
        this.name = 'AuthorizationError'
        this.status = status ,
        this.message = message
    }
}
export class NotFoundError extends Error {
    constructor(status , message){
        super(),
        this.name = 'NotFoundError'
        this.status = status ,
        this.message = message
    }
}
export class BadRequrestError extends Error {
    constructor(status , message){
        super(),
        this.name = 'BadRequrestError'
        this.status = status ,
        this.message = message
    }
}
export class InternalServerError extends Error {
    constructor(status , message){
        super(),
        this.name = 'InternalServerError'
        this.status = status ,
        this.message = message
    }
}
export class ForBiddenError extends Error {
    constructor(status , message){
        super(),
        this.name = 'ForBiddenError'
        this.status = status ,
        this.message = message
    }
}