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
import { PolicyRuleSrcIdsInnerInner } from './policy-rule-src-ids-inner-inner';

/**
 * Defines the destination accounts the rule allows transfers to
 * @export
 * @interface PolicyRuleDst
 */
export interface PolicyRuleDst {
    /**
     * A set of ids
     * @type {Array<Array<PolicyRuleSrcIdsInnerInner>>}
     * @memberof PolicyRuleDst
     */
    'ids'?: Array<Array<PolicyRuleSrcIdsInnerInner>>;
}
