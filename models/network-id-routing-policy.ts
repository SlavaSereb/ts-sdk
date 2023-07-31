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
import { NetworkIdRoutingPolicyCrypto } from './network-id-routing-policy-crypto';
// May contain unused imports in some cases
// @ts-ignore
import { NetworkIdRoutingPolicySen } from './network-id-routing-policy-sen';
// May contain unused imports in some cases
// @ts-ignore
import { NetworkIdRoutingPolicySenTest } from './network-id-routing-policy-sen-test';

/**
 * 
 * @export
 * @interface NetworkIdRoutingPolicy
 */
export interface NetworkIdRoutingPolicy {
    /**
     * 
     * @type {NetworkIdRoutingPolicyCrypto}
     * @memberof NetworkIdRoutingPolicy
     */
    'crypto'?: NetworkIdRoutingPolicyCrypto;
    /**
     * 
     * @type {NetworkIdRoutingPolicySen}
     * @memberof NetworkIdRoutingPolicy
     */
    'sen'?: NetworkIdRoutingPolicySen;
    /**
     * 
     * @type {NetworkIdRoutingPolicySen}
     * @memberof NetworkIdRoutingPolicy
     */
    'signet'?: NetworkIdRoutingPolicySen;
    /**
     * 
     * @type {NetworkIdRoutingPolicySenTest}
     * @memberof NetworkIdRoutingPolicy
     */
    'sen_test'?: NetworkIdRoutingPolicySenTest;
    /**
     * 
     * @type {NetworkIdRoutingPolicySenTest}
     * @memberof NetworkIdRoutingPolicy
     */
    'signet_test'?: NetworkIdRoutingPolicySenTest;
}

