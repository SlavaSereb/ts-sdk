/* tslint:disable */
/* eslint-disable */
/**
 * Fireblocks API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.6.2
 * Contact: support@fireblocks.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ErrorResponseError
 */
export interface ErrorResponseError {
    /**
     * 
     * @type {string}
     * @memberof ErrorResponseError
     */
    'type': ErrorResponseErrorTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponseError
     */
    'message': string;
}

export const ErrorResponseErrorTypeEnum = {
    Internal: 'INTERNAL',
    Authentication: 'AUTHENTICATION',
    Authorization: 'AUTHORIZATION',
    Validation: 'VALIDATION',
    NotFound: 'NOT_FOUND',
    UnprocessableEntity: 'UNPROCESSABLE_ENTITY',
    Forbidden: 'FORBIDDEN'
} as const;

export type ErrorResponseErrorTypeEnum = typeof ErrorResponseErrorTypeEnum[keyof typeof ErrorResponseErrorTypeEnum];


