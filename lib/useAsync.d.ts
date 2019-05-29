import { DependencyList } from 'react';
export declare type AsyncState<T> = {
    loading: true;
    error?: undefined;
    value?: undefined;
} | {
    loading: false;
    error: Error;
    value?: undefined;
} | {
    loading: false;
    error?: undefined;
    value: T;
};
export default function useAsync<Result = any, Args extends any[] = any[], Fn extends Function = (...args: Args | []) => Promise<Result>>(fn: Fn, deps?: DependencyList): import("./useAsyncFn").AsyncState<Result>;
