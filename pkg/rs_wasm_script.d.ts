/* tslint:disable */
/* eslint-disable */

/**
 * One-shot initializer for all ported scripts. Call once from JS on page load.
 */
export function init_all(): void;

/**
 * Initialize all `.stack-container` galleries.
 */
export function init_image_stack(): void;

/**
 * Initialize scroll-reveal: adds "active" class to `.reveal` elements as they
 * scroll into view.
 */
export function init_scroll_reveal(): void;

/**
 * Attach click-to-animate listeners to elements matching `.touchable-avatar`.
 */
export function init_touchable_avatar(): void;

/**
 * Attach click listeners to post-type filter buttons.
 */
export function init_type_buttons(): void;

/**
 * Initialize the visual mode `<link>` element and apply the initial mode.
 */
export function init_visual_mode(): void;

/**
 * Initialize all visual-mode related functionality.
 */
export function init_visual_mode_all(): void;

/**
 * Attach click listeners to visual-mode switch buttons.
 */
export function init_visual_mode_buttons(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly init_image_stack: () => [number, number];
    readonly init_all: () => [number, number];
    readonly init_type_buttons: () => [number, number];
    readonly init_visual_mode: () => [number, number];
    readonly init_visual_mode_all: () => [number, number];
    readonly init_visual_mode_buttons: () => [number, number];
    readonly init_scroll_reveal: () => [number, number];
    readonly init_touchable_avatar: () => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h6db084beb989a42f: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hdd7384682abd359a: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
