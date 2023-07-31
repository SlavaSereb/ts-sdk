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
 * Details of the transaction\'s fee.
 * @export
 * @interface FeeInfo
 */
export interface FeeInfo {
    /**
     * The fee paid to the network
     * @type {string}
     * @memberof FeeInfo
     */
    'networkFee'?: string;
    /**
     * The total fee deducted by the exchange from the actual requested amount (serviceFee = amount - netAmount)
     * @type {string}
     * @memberof FeeInfo
     */
    'serviceFee'?: string;
    /**
     * 
     * @type {string}
     * @memberof FeeInfo
     */
    'gasPrice'?: string;
}

