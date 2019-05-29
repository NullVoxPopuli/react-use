import { DependencyList } from 'react';
export declare type AsyncState<T> = {
    loading: boolean;
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
export default function useAsyncFn<Result = any, Args extends any[] = any[], Fn extends Function = (...args: Args | []) => Promise<Result>>(fn: Fn, deps?: DependencyList, initialState?: AsyncState<Result>): [AsyncState<Result>, (...args: Args | []) => Promise<Result>];
