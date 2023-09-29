import { PromiseExtended } from "dexie";
// @ts-ignore
import { createDexieArrayQuery, createDexieSignalQuery } from "solid-dexie";
import { Accessor } from "solid-js";

declare type NotArray<T> = T extends any[] ? never : T;

export type useDexieQuery = <T>(querier: () => NotArray<T> | PromiseExtended<NotArray<T>>) => Accessor<T | undefined>;
export type useDexieArrayQuery = <T>(querier: () => T[] | Promise<T[]>) => T[];

export const useDexieQuery: useDexieQuery = createDexieSignalQuery;
export const useDexieArrayQuery: useDexieArrayQuery = createDexieArrayQuery;
