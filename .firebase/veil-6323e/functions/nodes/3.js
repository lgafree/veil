

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.232a5284.js","_app/immutable/chunks/scheduler.d05b783f.js","_app/immutable/chunks/index.cc061d23.js","_app/immutable/chunks/firebaseConfig.0c3747e6.js","_app/immutable/chunks/index.60452c41.js","_app/immutable/chunks/wavesurfer.f7bc6d49.js"];
export const stylesheets = [];
export const fonts = [];
