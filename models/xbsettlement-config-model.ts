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
import { XBSettlementConfigStepsRecord } from './xbsettlement-config-steps-record';
// May contain unused imports in some cases
// @ts-ignore
import { XBSettlementCorridorId } from './xbsettlement-corridor-id';

/**
 * 
 * @export
 * @interface XBSettlementConfigModel
 */
export interface XBSettlementConfigModel {
    /**
     * Cross Bodrder configuraion unique id
     * @type {string}
     * @memberof XBSettlementConfigModel
     */
    'configId': string;
    /**
     * 
     * @type {XBSettlementCorridorId}
     * @memberof XBSettlementConfigModel
     */
    'corridorId': XBSettlementCorridorId;
    /**
     * The name for the cross-border ettlement configuration
     * @type {string}
     * @memberof XBSettlementConfigModel
     */
    'name': string;
    /**
     * 
     * @type {XBSettlementConfigStepsRecord}
     * @memberof XBSettlementConfigModel
     */
    'steps': XBSettlementConfigStepsRecord;
    /**
     * Slippage configuarion in basis points, the default value is 10%
     * @type {number}
     * @memberof XBSettlementConfigModel
     */
    'conversionSlippageBasisPoints': number;
    /**
     * The creation time in epoch format.
     * @type {number}
     * @memberof XBSettlementConfigModel
     */
    'createdAt': number;
}



