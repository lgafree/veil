

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.31e8ffe3.js","_app/immutable/chunks/scheduler.d05b783f.js","_app/immutable/chunks/index.cc061d23.js","_app/immutable/chunks/stores.d73e76eb.js","_app/immutable/chunks/singletons.62e74208.js","_app/immutable/chunks/index.60452c41.js"];
export const stylesheets = [];
export const fonts = [];
