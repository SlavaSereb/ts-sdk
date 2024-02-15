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
 * @interface WithdrawRequestDto
 */
export interface WithdrawRequestDto {
    /**
     * id of position to withdraw
     * @type {string}
     * @memberof WithdrawRequestDto
     */
    'id': string;
    /**
     * Represents the fee for a transaction, which can be specified as a percentage value. Only one of fee/feeLevel is required.
     * @type {string}
     * @memberof WithdrawRequestDto
     */
    'fee'?: string;
    /**
     * Represents the fee level for a transaction, which can be set as slow, medium, or fast. Only one of fee/feeLevel is required.
     * @type {string}
     * @memberof WithdrawRequestDto
     */
    'feeLevel'?: string;
    /**
     * The note to associate with the transactions.
     * @type {string}
     * @memberof WithdrawRequestDto
     */
    'txNote'?: string;
}
