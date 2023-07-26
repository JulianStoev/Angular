export interface ajaxInterface {
    contentJson?: boolean;
    data?: any;
    noCache?: boolean;
    callback?: (arg0: any) => void;
}
export interface uriInterface extends ajaxInterface {
    uri: string;
    url?: string;
}
export interface urlInterface extends ajaxInterface {
    uri?: string;
    url: string;
}
export type ajaxTypeInterface = urlInterface | uriInterface;
export interface headersInterface {
    [name: string]: string | string[];
}
export type acceptedMethodsInterface = 'post' | 'get' | 'put' | 'delete' | 'head' | 'options';