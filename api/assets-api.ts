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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
import { convertToFireblocksResponse } from "../response/fireblocksResponse";
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { ErrorSchema } from '../models';
// @ts-ignore
import { GetAssetBalanceRequest } from '../models';
// @ts-ignore
import { JobCreated } from '../models';
/**
 * AssetsApi - axios parameter creator
 * @export
 */
export const AssetsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create multiple wallets for a given vault account by running an async job. </br> **Note**: - These endpoints are currently in beta and might be subject to changes. - We limit accounts to 10k per operation and 200k per customer during beta testing. - Currently, we are only supporting EVM wallets. 
         * @summary Bulk creation of wallets
         * @param {GetAssetBalanceRequest} getAssetBalanceRequest 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssetBalance: async (getAssetBalanceRequest: GetAssetBalanceRequest, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'getAssetBalanceRequest' is not null or undefined
            assertParamExists('getAssetBalance', 'getAssetBalanceRequest', getAssetBalanceRequest)
            const localVarPath = `/vault/assets/bulk`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(getAssetBalanceRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AssetsApi - functional programming interface
 * @export
 */
export const AssetsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AssetsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create multiple wallets for a given vault account by running an async job. </br> **Note**: - These endpoints are currently in beta and might be subject to changes. - We limit accounts to 10k per operation and 200k per customer during beta testing. - Currently, we are only supporting EVM wallets. 
         * @summary Bulk creation of wallets
         * @param {GetAssetBalanceRequest} getAssetBalanceRequest 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAssetBalance(getAssetBalanceRequest: GetAssetBalanceRequest, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobCreated>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAssetBalance(getAssetBalanceRequest, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['AssetsApi.getAssetBalance']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * AssetsApi - factory interface
 * @export
 */
export const AssetsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AssetsApiFp(configuration)
    return {
        /**
         * Create multiple wallets for a given vault account by running an async job. </br> **Note**: - These endpoints are currently in beta and might be subject to changes. - We limit accounts to 10k per operation and 200k per customer during beta testing. - Currently, we are only supporting EVM wallets. 
         * @summary Bulk creation of wallets
         * @param {AssetsApiGetAssetBalanceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssetBalance(requestParameters: AssetsApiGetAssetBalanceRequest, options?: RawAxiosRequestConfig): AxiosPromise<JobCreated> {
            return localVarFp.getAssetBalance(requestParameters.getAssetBalanceRequest, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAssetBalance operation in AssetsApi.
 * @export
 * @interface AssetsApiGetAssetBalanceRequest
 */
export interface AssetsApiGetAssetBalanceRequest {
    /**
     * 
     * @type {GetAssetBalanceRequest}
     * @memberof AssetsApiGetAssetBalance
     */
    readonly getAssetBalanceRequest: GetAssetBalanceRequest

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof AssetsApiGetAssetBalance
     */
    readonly idempotencyKey?: string
}

/**
 * AssetsApi - object-oriented interface
 * @export
 * @class AssetsApi
 * @extends {BaseAPI}
 */
export class AssetsApi extends BaseAPI {
    /**
     * Create multiple wallets for a given vault account by running an async job. </br> **Note**: - These endpoints are currently in beta and might be subject to changes. - We limit accounts to 10k per operation and 200k per customer during beta testing. - Currently, we are only supporting EVM wallets. 
     * @summary Bulk creation of wallets
     * @param {AssetsApiGetAssetBalanceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssetsApi
     */
    public getAssetBalance(requestParameters: AssetsApiGetAssetBalanceRequest) {
        return AssetsApiFp(this.configuration).getAssetBalance(requestParameters.getAssetBalanceRequest, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }
}
