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
import { RewardsInfo } from './rewards-info';

/**
 * 
 * @export
 * @interface VaultAsset
 */
export interface VaultAsset {
    /**
     * 
     * @type {string}
     * @memberof VaultAsset
     */
    'id'?: string;
    /**
     * The total wallet balance. In EOS this value includes the network balance, self staking and pending refund. For all other coins it is the balance as it appears on the blockchain.
     * @type {string}
     * @memberof VaultAsset
     */
    'total'?: string;
    /**
     * Deprecated - replaced by \"total\"
     * @type {string}
     * @memberof VaultAsset
     * @deprecated
     */
    'balance'?: string;
    /**
     * Funds available for transfer. Equals the blockchain balance minus any locked amounts
     * @type {string}
     * @memberof VaultAsset
     */
    'available'?: string;
    /**
     * The cumulative balance of all transactions pending to be cleared
     * @type {string}
     * @memberof VaultAsset
     */
    'pending'?: string;
    /**
     * The cumulative frozen balance
     * @type {string}
     * @memberof VaultAsset
     */
    'frozen'?: string;
    /**
     * Funds in outgoing transactions that are not yet published to the network
     * @type {string}
     * @memberof VaultAsset
     */
    'lockedAmount'?: string;
    /**
     * Staked balance
     * @type {string}
     * @memberof VaultAsset
     */
    'staked'?: string;
    /**
     * The maximum BIP44 index used in deriving addresses for this wallet
     * @type {number}
     * @memberof VaultAsset
     */
    'maxBip44AddressIndexUsed'?: number;
    /**
     * The maximum BIP44 index used in deriving change addresses for this wallet
     * @type {number}
     * @memberof VaultAsset
     */
    'maxBip44ChangeAddressIndexUsed'?: number;
    /**
     * Deprecated
     * @type {number}
     * @memberof VaultAsset
     */
    'totalStakedCPU'?: number;
    /**
     * Deprecated
     * @type {string}
     * @memberof VaultAsset
     */
    'totalStakedNetwork'?: string;
    /**
     * Deprecated
     * @type {string}
     * @memberof VaultAsset
     */
    'selfStakedCPU'?: string;
    /**
     * Deprecated
     * @type {string}
     * @memberof VaultAsset
     */
    'selfStakedNetwork'?: string;
    /**
     * Deprecated
     * @type {string}
     * @memberof VaultAsset
     */
    'pendingRefundCPU'?: string;
    /**
     * Deprecated
     * @type {string}
     * @memberof VaultAsset
     */
    'pendingRefundNetwork'?: string;
    /**
     * 
     * @type {string}
     * @memberof VaultAsset
     */
    'blockHeight'?: string;
    /**
     * 
     * @type {string}
     * @memberof VaultAsset
     */
    'blockHash'?: string;
    /**
     * 
     * @type {RewardsInfo}
     * @memberof VaultAsset
     */
    'rewardsInfo'?: RewardsInfo;
}

