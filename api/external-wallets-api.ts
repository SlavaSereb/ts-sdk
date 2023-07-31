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

import {AxiosInstance, AxiosPromise, AxiosRequestConfig} from 'axios';
import {Configuration} from "../configuration";
import {HttpClient} from "../utils/http-client";
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';


// Some imports not used depending on template conditions
// @ts-ignore
import { assertParamExists, setSearchParams, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';

// @ts-ignore
import { AddAssetToExternalWalletRequest } from '../models';
// @ts-ignore
import { CreateInternalWalletRequest } from '../models';
// @ts-ignore
import { ExternalWalletAsset } from '../models';
// @ts-ignore
import { SetCustomerRefIdForVaultAccountRequest } from '../models';
// @ts-ignore
import { UnmanagedWallet } from '../models';



    /**
 * ExternalWalletsApi - axios parameter creator
 * @export
 */
export const ExternalWalletsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adds an asset to an existing external wallet.
         * @summary Add an asset to an external wallet.
         * @param {string} walletId The ID of the wallet
         * @param {string} assetId The ID of the asset to add
         * @param {AddAssetToExternalWalletRequest} [addAssetToExternalWalletRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addAssetToExternalWallet: async (walletId: string, assetId: string, addAssetToExternalWalletRequest?: AddAssetToExternalWalletRequest, ): Promise<AxiosRequestConfig> => {
            // verify required parameter 'walletId' is not null or undefined
            assertParamExists('addAssetToExternalWallet', 'walletId', walletId)
            // verify required parameter 'assetId' is not null or undefined
            assertParamExists('addAssetToExternalWallet', 'assetId', assetId)
            const localVarPath = `/external_wallets/{walletId}/{assetId}`
                .replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)))
                .replace(`{${"assetId"}}`, encodeURIComponent(String(assetId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'POST'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };
            localVarRequestOptions.data = addAssetToExternalWalletRequest as any;

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
        /**
         * Creates a new external wallet with the requested name.
         * @summary Create an external wallet
         * @param {CreateInternalWalletRequest} [createInternalWalletRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createExternalWallet: async (createInternalWalletRequest?: CreateInternalWalletRequest, ): Promise<AxiosRequestConfig> => {
            const localVarPath = `/external_wallets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'POST'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };
            localVarRequestOptions.data = createInternalWalletRequest as any;

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
        /**
         * Deletes an external wallet by ID.
         * @summary Delete an external wallet
         * @param {string} walletId The ID of the wallet to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteExternalWallet: async (walletId: string, ): Promise<AxiosRequestConfig> => {
            // verify required parameter 'walletId' is not null or undefined
            assertParamExists('deleteExternalWallet', 'walletId', walletId)
            const localVarPath = `/external_wallets/{walletId}`
                .replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'DELETE'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
        /**
         * Returns an external wallet by wallet ID and asset ID.
         * @summary Get an asset from an external wallet
         * @param {string} walletId The ID of the wallet
         * @param {string} assetId The ID of the asset to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssetInExternalWallet: async (walletId: string, assetId: string, ): Promise<AxiosRequestConfig> => {
            // verify required parameter 'walletId' is not null or undefined
            assertParamExists('getAssetInExternalWallet', 'walletId', walletId)
            // verify required parameter 'assetId' is not null or undefined
            assertParamExists('getAssetInExternalWallet', 'assetId', assetId)
            const localVarPath = `/external_wallets/{walletId}/{assetId}`
                .replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)))
                .replace(`{${"assetId"}}`, encodeURIComponent(String(assetId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'GET'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
        /**
         * Returns an external wallet by ID.
         * @summary Find an external wallet
         * @param {string} walletId The ID of the wallet to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExternalWalletById: async (walletId: string, ): Promise<AxiosRequestConfig> => {
            // verify required parameter 'walletId' is not null or undefined
            assertParamExists('getExternalWalletById', 'walletId', walletId)
            const localVarPath = `/external_wallets/{walletId}`
                .replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'GET'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
        /**
         * Gets a list of external wallets under the workspace.
         * @summary List external wallets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExternalWallets: async (): Promise<AxiosRequestConfig> => {
            const localVarPath = `/external_wallets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'GET'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
        /**
         * Deletes an external wallet asset by ID.
         * @summary Delete an asset from an external wallet
         * @param {string} walletId The ID of the wallet
         * @param {string} assetId The ID of the asset to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeAssetFromExternalWallet: async (walletId: string, assetId: string, ): Promise<AxiosRequestConfig> => {
            // verify required parameter 'walletId' is not null or undefined
            assertParamExists('removeAssetFromExternalWallet', 'walletId', walletId)
            // verify required parameter 'assetId' is not null or undefined
            assertParamExists('removeAssetFromExternalWallet', 'assetId', assetId)
            const localVarPath = `/external_wallets/{walletId}/{assetId}`
                .replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)))
                .replace(`{${"assetId"}}`, encodeURIComponent(String(assetId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'DELETE'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
        /**
         * Sets an AML/KYT customer reference ID for the specific external wallet.
         * @summary Set an AML customer reference ID for an external wallet
         * @param {SetCustomerRefIdForVaultAccountRequest} setCustomerRefIdForVaultAccountRequest 
         * @param {string} walletId The wallet ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setCustomerRefIdForExternalWallet: async (setCustomerRefIdForVaultAccountRequest: SetCustomerRefIdForVaultAccountRequest, walletId: string, ): Promise<AxiosRequestConfig> => {
            // verify required parameter 'setCustomerRefIdForVaultAccountRequest' is not null or undefined
            assertParamExists('setCustomerRefIdForExternalWallet', 'setCustomerRefIdForVaultAccountRequest', setCustomerRefIdForVaultAccountRequest)
            // verify required parameter 'walletId' is not null or undefined
            assertParamExists('setCustomerRefIdForExternalWallet', 'walletId', walletId)
            const localVarPath = `/external_wallets/{walletId}/set_customer_ref_id`
                .replace(`{${"walletId"}}`, encodeURIComponent(String(walletId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'POST'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };
            localVarRequestOptions.data = setCustomerRefIdForVaultAccountRequest as any;

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
    }
};

/**
 * ExternalWalletsApi - functional programming interface
 * @export
 */
export const ExternalWalletsApiFp = function(httpClient: HttpClient) {
    const localVarAxiosParamCreator = ExternalWalletsApiAxiosParamCreator(httpClient.configuration)
    return {
        /**
         * Adds an asset to an existing external wallet.
         * @summary Add an asset to an external wallet.
         * @param {string} walletId The ID of the wallet
         * @param {string} assetId The ID of the asset to add
         * @param {AddAssetToExternalWalletRequest} [addAssetToExternalWalletRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addAssetToExternalWallet(walletId: string, assetId: string, addAssetToExternalWalletRequest?: AddAssetToExternalWalletRequest, ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExternalWalletAsset>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addAssetToExternalWallet(walletId, assetId, addAssetToExternalWalletRequest, );
            return httpClient.request(localVarAxiosArgs);
        },
        /**
         * Creates a new external wallet with the requested name.
         * @summary Create an external wallet
         * @param {CreateInternalWalletRequest} [createInternalWalletRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createExternalWallet(createInternalWalletRequest?: CreateInternalWalletRequest, ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UnmanagedWallet>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createExternalWallet(createInternalWalletRequest, );
            return httpClient.request(localVarAxiosArgs);
        },
        /**
         * Deletes an external wallet by ID.
         * @summary Delete an external wallet
         * @param {string} walletId The ID of the wallet to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteExternalWallet(walletId: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteExternalWallet(walletId, );
            return httpClient.request(localVarAxiosArgs);
        },
        /**
         * Returns an external wallet by wallet ID and asset ID.
         * @summary Get an asset from an external wallet
         * @param {string} walletId The ID of the wallet
         * @param {string} assetId The ID of the asset to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAssetInExternalWallet(walletId: string, assetId: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExternalWalletAsset>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAssetInExternalWallet(walletId, assetId, );
            return httpClient.request(localVarAxiosArgs);
        },
        /**
         * Returns an external wallet by ID.
         * @summary Find an external wallet
         * @param {string} walletId The ID of the wallet to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExternalWalletById(walletId: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UnmanagedWallet>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExternalWalletById(walletId, );
            return httpClient.request(localVarAxiosArgs);
        },
        /**
         * Gets a list of external wallets under the workspace.
         * @summary List external wallets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExternalWallets(): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UnmanagedWallet>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExternalWallets();
            return httpClient.request(localVarAxiosArgs);
        },
        /**
         * Deletes an external wallet asset by ID.
         * @summary Delete an asset from an external wallet
         * @param {string} walletId The ID of the wallet
         * @param {string} assetId The ID of the asset to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeAssetFromExternalWallet(walletId: string, assetId: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeAssetFromExternalWallet(walletId, assetId, );
            return httpClient.request(localVarAxiosArgs);
        },
        /**
         * Sets an AML/KYT customer reference ID for the specific external wallet.
         * @summary Set an AML customer reference ID for an external wallet
         * @param {SetCustomerRefIdForVaultAccountRequest} setCustomerRefIdForVaultAccountRequest 
         * @param {string} walletId The wallet ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setCustomerRefIdForExternalWallet(setCustomerRefIdForVaultAccountRequest: SetCustomerRefIdForVaultAccountRequest, walletId: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setCustomerRefIdForExternalWallet(setCustomerRefIdForVaultAccountRequest, walletId, );
            return httpClient.request(localVarAxiosArgs);
        },
    }
};

/**
 * Request parameters for addAssetToExternalWallet operation in ExternalWalletsApi.
 * @export
 * @interface ExternalWalletsApiAddAssetToExternalWalletRequest
 */
export interface ExternalWalletsApiAddAssetToExternalWalletRequest {
    /**
     * The ID of the wallet
     * @type {string}
     * @memberof ExternalWalletsApiAddAssetToExternalWallet
     */
    readonly walletId: string

    /**
     * The ID of the asset to add
     * @type {string}
     * @memberof ExternalWalletsApiAddAssetToExternalWallet
     */
    readonly assetId: string

    /**
     * 
     * @type {AddAssetToExternalWalletRequest}
     * @memberof ExternalWalletsApiAddAssetToExternalWallet
     */
    readonly addAssetToExternalWalletRequest?: AddAssetToExternalWalletRequest
}

/**
 * Request parameters for createExternalWallet operation in ExternalWalletsApi.
 * @export
 * @interface ExternalWalletsApiCreateExternalWalletRequest
 */
export interface ExternalWalletsApiCreateExternalWalletRequest {
    /**
     * 
     * @type {CreateInternalWalletRequest}
     * @memberof ExternalWalletsApiCreateExternalWallet
     */
    readonly createInternalWalletRequest?: CreateInternalWalletRequest
}

/**
 * Request parameters for deleteExternalWallet operation in ExternalWalletsApi.
 * @export
 * @interface ExternalWalletsApiDeleteExternalWalletRequest
 */
export interface ExternalWalletsApiDeleteExternalWalletRequest {
    /**
     * The ID of the wallet to delete
     * @type {string}
     * @memberof ExternalWalletsApiDeleteExternalWallet
     */
    readonly walletId: string
}

/**
 * Request parameters for getAssetInExternalWallet operation in ExternalWalletsApi.
 * @export
 * @interface ExternalWalletsApiGetAssetInExternalWalletRequest
 */
export interface ExternalWalletsApiGetAssetInExternalWalletRequest {
    /**
     * The ID of the wallet
     * @type {string}
     * @memberof ExternalWalletsApiGetAssetInExternalWallet
     */
    readonly walletId: string

    /**
     * The ID of the asset to return
     * @type {string}
     * @memberof ExternalWalletsApiGetAssetInExternalWallet
     */
    readonly assetId: string
}

/**
 * Request parameters for getExternalWalletById operation in ExternalWalletsApi.
 * @export
 * @interface ExternalWalletsApiGetExternalWalletByIdRequest
 */
export interface ExternalWalletsApiGetExternalWalletByIdRequest {
    /**
     * The ID of the wallet to return
     * @type {string}
     * @memberof ExternalWalletsApiGetExternalWalletById
     */
    readonly walletId: string
}

/**
 * Request parameters for removeAssetFromExternalWallet operation in ExternalWalletsApi.
 * @export
 * @interface ExternalWalletsApiRemoveAssetFromExternalWalletRequest
 */
export interface ExternalWalletsApiRemoveAssetFromExternalWalletRequest {
    /**
     * The ID of the wallet
     * @type {string}
     * @memberof ExternalWalletsApiRemoveAssetFromExternalWallet
     */
    readonly walletId: string

    /**
     * The ID of the asset to delete
     * @type {string}
     * @memberof ExternalWalletsApiRemoveAssetFromExternalWallet
     */
    readonly assetId: string
}

/**
 * Request parameters for setCustomerRefIdForExternalWallet operation in ExternalWalletsApi.
 * @export
 * @interface ExternalWalletsApiSetCustomerRefIdForExternalWalletRequest
 */
export interface ExternalWalletsApiSetCustomerRefIdForExternalWalletRequest {
    /**
     * 
     * @type {SetCustomerRefIdForVaultAccountRequest}
     * @memberof ExternalWalletsApiSetCustomerRefIdForExternalWallet
     */
    readonly setCustomerRefIdForVaultAccountRequest: SetCustomerRefIdForVaultAccountRequest

    /**
     * The wallet ID
     * @type {string}
     * @memberof ExternalWalletsApiSetCustomerRefIdForExternalWallet
     */
    readonly walletId: string
}

/**
 * ExternalWalletsApi - object-oriented interface
 * @export
 * @class ExternalWalletsApi
 * @extends {BaseAPI}
 */
export class ExternalWalletsApi extends BaseAPI {
    /**
     * Adds an asset to an existing external wallet.
     * @summary Add an asset to an external wallet.
     * @param {ExternalWalletsApiAddAssetToExternalWalletRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExternalWalletsApi
     */
    public addAssetToExternalWallet(requestParameters: ExternalWalletsApiAddAssetToExternalWalletRequest, ) {
        return ExternalWalletsApiFp(this.httpClient).addAssetToExternalWallet(requestParameters.walletId, requestParameters.assetId, requestParameters.addAssetToExternalWalletRequest, );
    }

    /**
     * Creates a new external wallet with the requested name.
     * @summary Create an external wallet
     * @param {ExternalWalletsApiCreateExternalWalletRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExternalWalletsApi
     */
    public createExternalWallet(requestParameters: ExternalWalletsApiCreateExternalWalletRequest = {}, ) {
        return ExternalWalletsApiFp(this.httpClient).createExternalWallet(requestParameters.createInternalWalletRequest, );
    }

    /**
     * Deletes an external wallet by ID.
     * @summary Delete an external wallet
     * @param {ExternalWalletsApiDeleteExternalWalletRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExternalWalletsApi
     */
    public deleteExternalWallet(requestParameters: ExternalWalletsApiDeleteExternalWalletRequest, ) {
        return ExternalWalletsApiFp(this.httpClient).deleteExternalWallet(requestParameters.walletId, );
    }

    /**
     * Returns an external wallet by wallet ID and asset ID.
     * @summary Get an asset from an external wallet
     * @param {ExternalWalletsApiGetAssetInExternalWalletRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExternalWalletsApi
     */
    public getAssetInExternalWallet(requestParameters: ExternalWalletsApiGetAssetInExternalWalletRequest, ) {
        return ExternalWalletsApiFp(this.httpClient).getAssetInExternalWallet(requestParameters.walletId, requestParameters.assetId, );
    }

    /**
     * Returns an external wallet by ID.
     * @summary Find an external wallet
     * @param {ExternalWalletsApiGetExternalWalletByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExternalWalletsApi
     */
    public getExternalWalletById(requestParameters: ExternalWalletsApiGetExternalWalletByIdRequest, ) {
        return ExternalWalletsApiFp(this.httpClient).getExternalWalletById(requestParameters.walletId, );
    }

    /**
     * Gets a list of external wallets under the workspace.
     * @summary List external wallets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExternalWalletsApi
     */
    public getExternalWallets() {
        return ExternalWalletsApiFp(this.httpClient).getExternalWallets();
    }

    /**
     * Deletes an external wallet asset by ID.
     * @summary Delete an asset from an external wallet
     * @param {ExternalWalletsApiRemoveAssetFromExternalWalletRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExternalWalletsApi
     */
    public removeAssetFromExternalWallet(requestParameters: ExternalWalletsApiRemoveAssetFromExternalWalletRequest, ) {
        return ExternalWalletsApiFp(this.httpClient).removeAssetFromExternalWallet(requestParameters.walletId, requestParameters.assetId, );
    }

    /**
     * Sets an AML/KYT customer reference ID for the specific external wallet.
     * @summary Set an AML customer reference ID for an external wallet
     * @param {ExternalWalletsApiSetCustomerRefIdForExternalWalletRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExternalWalletsApi
     */
    public setCustomerRefIdForExternalWallet(requestParameters: ExternalWalletsApiSetCustomerRefIdForExternalWalletRequest, ) {
        return ExternalWalletsApiFp(this.httpClient).setCustomerRefIdForExternalWallet(requestParameters.setCustomerRefIdForVaultAccountRequest, requestParameters.walletId, );
    }
}
