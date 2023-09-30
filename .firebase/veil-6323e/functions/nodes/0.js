

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.4bb861cc.js","_app/immutable/chunks/scheduler.d05b783f.js","_app/immutable/chunks/index.cc061d23.js"];
export const stylesheets = ["_app/immutable/assets/0.9532ad10.css"];
export const fonts = [];
