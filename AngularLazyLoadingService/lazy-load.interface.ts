export type itemsInterface = 'styles' | 'scripts';

export type callbackInterface = () => void;

export interface lazyInterface {
    item: itemsInterface;
    callback?: callbackInterface;
    data?: any;
}