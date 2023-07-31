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
import { DestinationTransferPeerPathResponse } from './destination-transfer-peer-path-response';
// May contain unused imports in some cases
// @ts-ignore
import { RewardInfo } from './reward-info';
// May contain unused imports in some cases
// @ts-ignore
import { SourceTransferPeerPathResponse } from './source-transfer-peer-path-response';

/**
 * 
 * @export
 * @interface NetworkRecord
 */
export interface NetworkRecord {
    /**
     * 
     * @type {SourceTransferPeerPathResponse}
     * @memberof NetworkRecord
     */
    'source'?: SourceTransferPeerPathResponse;
    /**
     * 
     * @type {DestinationTransferPeerPathResponse}
     * @memberof NetworkRecord
     */
    'destination'?: DestinationTransferPeerPathResponse;
    /**
     * 
     * @type {string}
     * @memberof NetworkRecord
     */
    'txHash'?: string;
    /**
     * 
     * @type {string}
     * @memberof NetworkRecord
     */
    'networkFee'?: string;
    /**
     * 
     * @type {string}
     * @memberof NetworkRecord
     */
    'assetId'?: string;
    /**
     * The net amount of the transaction, after fee deduction
     * @type {string}
     * @memberof NetworkRecord
     */
    'netAmount'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof NetworkRecord
     */
    'isDropped'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NetworkRecord
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof NetworkRecord
     */
    'destinationAddress'?: string;
    /**
     * 
     * @type {string}
     * @memberof NetworkRecord
     */
    'sourceAddress'?: string;
    /**
     * 
     * @type {string}
     * @memberof NetworkRecord
     */
    'amountUSD'?: string;
    /**
     * 
     * @type {number}
     * @memberof NetworkRecord
     */
    'index'?: number;
    /**
     * 
     * @type {RewardInfo}
     * @memberof NetworkRecord
     */
    'rewardInfo'?: RewardInfo;
}

