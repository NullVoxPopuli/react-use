import { AsyncState } from './useAsync';
export declare type AsyncStateRetry<T> = AsyncState<T> & {
    retry(): void;
};
declare const useAsyncRetry: <T>(fn: () => Promise<T>, deps?: readonly any[]) => {
    retry: () => void;
    loading: boolean;
    error?: undefined;
    value?: undefined;
} | {
    retry: () => void;
    loading: false;
    error: Error;
    value?: undefined;
} | {
    retry: () => void;
    loading: false;
    error?: undefined;
    value: any;
};
export default useAsyncRetry;
