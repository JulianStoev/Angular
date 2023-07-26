export interface storedImageInterface {
    calcWidth: number;
    width: number;
    height: number;
    loaded: number;
    src: string;
}

export type slidesInterface = 'slidePrePrev' | 'slidePrev' | 'slideMain' | 'slideNext' | 'slideNextNext';

export interface preloadImageInterface {
    index: number;
    slide?: slidesInterface;
    callback?: () => void;
}

export interface configInterface {
    transitionDuration: number;
    src: string;
}