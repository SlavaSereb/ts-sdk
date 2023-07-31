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
 * @interface XBSettlementCreateFlowRequestBody
 */
export interface XBSettlementCreateFlowRequestBody {
    /**
     * Cross Bodrder configuraion unique id
     * @type {string}
     * @memberof XBSettlementCreateFlowRequestBody
     */
    'configId': string;
    /**
     * The amount to transfer in this cross-border flow. The type of asset is defined by the cross-border settlement configuration.
     * @type {string}
     * @memberof XBSettlementCreateFlowRequestBody
     */
    'amount': string;
}

