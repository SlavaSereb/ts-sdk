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


// May contain unused imports in some cases
// @ts-ignore
import { TransactionFee } from './transaction-fee';

/**
 * 
 * @export
 * @interface EstimatedTransactionFeeResponse
 */
export interface EstimatedTransactionFeeResponse {
    /**
     * 
     * @type {TransactionFee}
     * @memberof EstimatedTransactionFeeResponse
     */
    'low': TransactionFee;
    /**
     * 
     * @type {TransactionFee}
     * @memberof EstimatedTransactionFeeResponse
     */
    'medium': TransactionFee;
    /**
     * 
     * @type {TransactionFee}
     * @memberof EstimatedTransactionFeeResponse
     */
    'high': TransactionFee;
}

