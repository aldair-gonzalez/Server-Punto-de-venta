import { ResponseData, ResponseError } from '../dao/models/response.model';



export const responseData = ( status: number, payload: any ): ResponseData => {
    return { status, payload }
}

export const responseError = ( status: number, payload: any, message: string ): ResponseError => {
    return { status, payload, message }
}