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
 * @enum {string}
 */

export const XBSettlementFlowExecutionStepStatus = {
    NotStarted: 'NOT_STARTED',
    Processing: 'PROCESSING',
    Completed: 'COMPLETED',
    Failed: 'FAILED'
} as const;

export type XBSettlementFlowExecutionStepStatus = typeof XBSettlementFlowExecutionStepStatus[keyof typeof XBSettlementFlowExecutionStepStatus];



