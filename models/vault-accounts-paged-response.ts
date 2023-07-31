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
import { VaultAccount } from './vault-account';
// May contain unused imports in some cases
// @ts-ignore
import { VaultAccountsPagedResponsePaging } from './vault-accounts-paged-response-paging';

/**
 * 
 * @export
 * @interface VaultAccountsPagedResponse
 */
export interface VaultAccountsPagedResponse {
    /**
     * 
     * @type {Array<VaultAccount>}
     * @memberof VaultAccountsPagedResponse
     */
    'accounts'?: Array<VaultAccount>;
    /**
     * 
     * @type {VaultAccountsPagedResponsePaging}
     * @memberof VaultAccountsPagedResponse
     */
    'paging'?: VaultAccountsPagedResponsePaging;
    /**
     * 
     * @type {string}
     * @memberof VaultAccountsPagedResponse
     */
    'previousUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof VaultAccountsPagedResponse
     */
    'nextUrl'?: string;
}

