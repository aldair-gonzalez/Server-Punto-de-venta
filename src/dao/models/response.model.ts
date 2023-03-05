export interface ResponseData {
    status:     number
    payload:    any
}

export interface ResponseError {
    status:  number
    payload: any
    message: string
}