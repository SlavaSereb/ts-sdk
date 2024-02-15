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

import { version } from "../package.json";
import os from "os";
import platform from "platform";
import type { AxiosInstance, RawAxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import { BearerTokenProvider } from "./bearerTokenProvider";
import { AdditionalOptions } from "../client/clientConfiguration";
import { handleError } from "../error/fireblocksError";

const API_KEY_HEADER_NAME = "X-API-Key";
const AUTHORIZATION_HEADER_NAME = "Authorization"
const USER_AGENT_HEADER_NAME = "User-Agent"
const CONTENT_TYPE_HEADER_NAME = "Content-Type"

export class AxiosManager {
    tokenProvider: BearerTokenProvider; // service which provides the up-to-date jwt token
    axiosInstance: AxiosInstance;

    /**
    * Configures the http authentication with the required details.
    *
    * @param apiKey the API key to use
    * @param secretKey the secret key to use
    * @param additionalOptions additional options to configure the SDK and the underlying HTTP client
    */
    public constructor(private apiKey: string, private secretKey: string, private additionalOptions?: AdditionalOptions) {
        this.tokenProvider = new BearerTokenProvider(apiKey, secretKey);
        this.axiosInstance = axios.create();

        // Request interceptor for API calls
        this.axiosInstance.interceptors.request.use(
            async (config: InternalAxiosRequestConfig) => {
                config.headers = {
                    ...config.headers,
                    ...this.getHeaders(config),
                } as any
                return config;
        },
            (error: any) => {
                Promise.reject(handleError(error))
            }
        );

        // Response interceptor for API calls
        this.axiosInstance.interceptors.response.use(
            response => response,
            (error: any) => {
                throw handleError(error);
            }
        );
    }

    private getHeaders(config: InternalAxiosRequestConfig): Record<string, string> {
        return {
            ...this.getApiKeyHeader(),
            ...this.getAuthorizationHeader(config),
            ...this.getUserAgentHeader(),
            ...this.getContentTypeHeader()
        };
    }

    private getApiKeyHeader(): Record<string, string> {
        return { [API_KEY_HEADER_NAME]: this.apiKey || ''};
    }

    private getAuthorizationHeader(config: InternalAxiosRequestConfig): Record<string, string> {
        const token = this.tokenProvider.getToken(config.method as string,
            config.url as string,
            config.data);
        return { [AUTHORIZATION_HEADER_NAME]: `Bearer ${token}`};
    }

    private getUserAgentHeader(): Record<string, string> {
        return { [USER_AGENT_HEADER_NAME]: this.getUserAgent()};
    }

    private getContentTypeHeader(): Record<string, string> {
        return { [CONTENT_TYPE_HEADER_NAME]: "application/json"};
    }

    private getUserAgent(): string {
        let userAgent = `@fireblocks/ts-sdk/${version}`;
        if (!this.additionalOptions?.isAnonymousPlatform) {
            userAgent += ` (${os.type()} ${os.release()}; ${platform.name} ${platform.version}; ${os.arch()})`;
        }
        if (this.additionalOptions?.userAgent) {
            userAgent = `${this.additionalOptions?.userAgent} ${userAgent}`;
        }
        return userAgent;
    }

    get axios(): AxiosInstance {
        return this.axiosInstance;
    }
}