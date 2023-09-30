export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.dcdde867.js","app":"_app/immutable/entry/app.ff2201c9.js","imports":["_app/immutable/entry/start.dcdde867.js","_app/immutable/chunks/scheduler.d05b783f.js","_app/immutable/chunks/singletons.62e74208.js","_app/immutable/chunks/index.60452c41.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.ff2201c9.js","_app/immutable/chunks/scheduler.d05b783f.js","_app/immutable/chunks/index.cc061d23.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/send-vm/[username]",
				pattern: /^\/send-vm\/([^/]+?)\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,2,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
