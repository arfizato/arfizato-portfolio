import { writable, type Writable } from "svelte/store";

export const pageIndex: Writable<number> = writable(0);