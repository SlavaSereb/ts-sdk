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
import { AdditionalInfoDto } from './additional-info-dto';

/**
 * 
 * @export
 * @interface ChainInfoResponseDto
 */
export interface ChainInfoResponseDto {
    /**
     * The protocol identifier (e.g. \"ETH\"/\"SOL\").
     * @type {string}
     * @memberof ChainInfoResponseDto
     */
    'chainDescriptor': string;
    /**
     * The current epoch number of the blockchain network.
     * @type {number}
     * @memberof ChainInfoResponseDto
     */
    'currentEpoch': number;
    /**
     * The percentage of time that has elapsed within the current epoch, represented as a decimal value between 0 and 1.
     * @type {number}
     * @memberof ChainInfoResponseDto
     */
    'epochElapsed': number;
    /**
     * The total duration in milliseconds of a single epoch.
     * @type {number}
     * @memberof ChainInfoResponseDto
     */
    'epochDuration': number;
    /**
     * 
     * @type {AdditionalInfoDto}
     * @memberof ChainInfoResponseDto
     */
    'additionalInfo': AdditionalInfoDto;
}
