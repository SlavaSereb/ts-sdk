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
import { PaymentAccount } from './payment-account';
// May contain unused imports in some cases
// @ts-ignore
import { PayoutInstruction } from './payout-instruction';

/**
 * 
 * @export
 * @interface CreatePayoutRequest
 */
export interface CreatePayoutRequest {
    /**
     * 
     * @type {PaymentAccount}
     * @memberof CreatePayoutRequest
     */
    'paymentAccount': PaymentAccount;
    /**
     * 
     * @type {Array<PayoutInstruction>}
     * @memberof CreatePayoutRequest
     */
    'instructionSet': Array<PayoutInstruction>;
}

