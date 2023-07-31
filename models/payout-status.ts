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
 * - REQUESTED payout requested with all its details - VERIFIED payout instruction set details were verified - PROCESSING payout instruction set executed and is processing - FINALIZED payout done (all payout instructions completed successfully) - INSUFFICIENT_BALANCE insufficient balance in the payment account (can be a temporary state) - FAILED one or more of the payout instructions failed 
 * @export
 * @enum {string}
 */

export const PayoutStatus = {
    Registered: 'REGISTERED',
    Verifying: 'VERIFYING',
    InProgress: 'IN_PROGRESS',
    Done: 'DONE',
    InsufficientBalance: 'INSUFFICIENT_BALANCE',
    Failed: 'FAILED'
} as const;

export type PayoutStatus = typeof PayoutStatus[keyof typeof PayoutStatus];



