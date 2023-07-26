export interface uploadInterface {
    id?: number;
    chunkSize?: number;
    instantUpload?: boolean;
    url: string;
    headers?: Object;
    start?: (arg0: ProgressEvent<EventTarget>) => void;
    progress?: (arg0: number) => void;
    abort?: (arg0: ProgressEvent<EventTarget>) => void;
    error?: (arg0: ProgressEvent<EventTarget>) => void;
    done?: (arg0: any) => void;
}