import axios, { AxiosRequestConfig, Method, ResponseType, AxiosResponse } from 'axios';
import { HttpMethods, HttpStatus } from '../shared';

export class ApiRequest {
    method: HttpMethods;
    resource: string;
    body?: any;
    headers?: any;
    responseType?: string;
    responseEncoding?: string;
    auth?: string;
    data?: any;
    onUploadProgress?: (ev: ProgressEvent) => void;

    constructor(init: ApiRequest) {
        Object.assign(this, init);
    }
}

export interface ApiResponse {
    failure: boolean;
    failureClient?: boolean;
    failureServer?: boolean;
    failureNetwork?: boolean;
    status?: HttpStatus;
    statusText?: string;
    body?: any;
    [key: string]: any;
}

export class ApiClient {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async ExecuteRequest(request: ApiRequest): Promise<ApiResponse> {
        const headers: any = {};

        if(request.auth)
            headers.authorization = `Bearer ${request.auth}`;

        try {
            const _request: AxiosRequestConfig = {
                baseURL: this.baseUrl,
                url: request.resource,
                method: request.method as Method,
                headers: headers,
                data: request.body,
                responseType: request.responseType as ResponseType ?? 'json',
                onUploadProgress: request.onUploadProgress,
            };

            const response = await axios(_request);
            return this.handleSuccess(response);
        }
        catch(err) {
            return this.handleError(err);
        }
    }

    private handleSuccess(response: AxiosResponse): ApiResponse {
        const { status, data } = response;

        const _response: ApiResponse = {
            failure: false,
            failureClient: false,
            failureServer: false,
            failureNetwork: false,
            status,
            body: data
        };

        this.setStatusDescription(_response);
        return _response;
    }

    private handleError(error: any): ApiResponse {
        const _response: ApiResponse = { failure: true };

        if(error && error.response) {
            const { status, data } = error.response;

            _response.failureClient = status >= 400 && status <= 499;
            _response.failureServer = status >= 500;
            _response.status = status;
            _response.body = data;

            this.setStatusDescription(_response);
        }
        else {
            _response.failureNetwork = true;
        }
        
        return _response;
    }

    private setStatusDescription(response: ApiResponse): void {
        if(!response.status)
            return;
        
        let statusDescription = Object.keys(HttpStatus)[Object.values(HttpStatus).indexOf(response.status)];

        if(!statusDescription)
            return;

        statusDescription = `${statusDescription.charAt(0).toLowerCase()}${statusDescription.slice(1)}`;
        response[statusDescription] = true;
    }
}
