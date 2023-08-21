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
 * The transaction’s source.
 * @export
 * @interface SourceTransferPeerPathResponseAllOf
 */
export interface SourceTransferPeerPathResponseAllOf {
    /**
     * 
     * @type {string}
     * @memberof SourceTransferPeerPathResponseAllOf
     */
    'type'?: string;
    /**
     * In case the type is set to `EXCHANGE_ACCOUNT` or `FIAT_ACCOUNT`, the specific exchange vendor name or fiat vendor name. In case the type is set to `INTERNAL_WALLET` or `EXTERNAL_WALLET`, the subType is set to `Internal` or `External`.
     * @type {string}
     * @memberof SourceTransferPeerPathResponseAllOf
     */
    'subType'?: string;
    /**
     * The ID of the peer. You can retrieve the ID of each venue object using the endpoints for [listing vault accounts](https://developers.fireblocks.com/reference/get_vault-accounts-paged), [listing exchange account](https://developers.fireblocks.com/reference/get_exchange-accounts), [listing fiat accounts](https://developers.fireblocks.com/reference/get_fiat-accounts), [listing internal wallets](https://developers.fireblocks.com/reference/get_internal-wallets), [listing external wallets](https://developers.fireblocks.com/reference/get_external-wallets), [listing network connections](https://developers.fireblocks.com/reference/get_network-connections). For the other types, this parameter is not needed.
     * @type {string}
     * @memberof SourceTransferPeerPathResponseAllOf
     */
    'id'?: string;
    /**
     * The name of the peer.
     * @type {string}
     * @memberof SourceTransferPeerPathResponseAllOf
     */
    'name'?: string;
}

