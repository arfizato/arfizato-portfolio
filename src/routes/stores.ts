import { writable, type Writable } from "svelte/store";

export const pageIndex: Writable<number> = writable(0);
export const themeStore: Writable<string> = writable("dark");