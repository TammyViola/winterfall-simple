/**
 * routes.js
 *
 * 整个应用的路径配置
 * 
 */

const errorLoading = (err) => {
	console.error('Dynamic page loading failed', err);
};

const loadModule = (cb) => (componentModule) => {
	cb(null, componentModule.default);
};

export default function createRoutes() {
	return [{
		path: '/',
		name: 'home',
		getComponent(nextState, cb) {
			Promise.all([
				System.import('Pages/HomePage'),
			]).then(([component]) => {
				loadModule(cb)(component);
			}).catch(errorLoading);
		},
	}, {
		path: '/features',
		name: 'features',
		getComponent(nextState, cb) {
			Promise.all([
				System.import('Pages/FeaturePage'),
			]).then(([component]) => {
				loadModule(cb)(component);
			}).catch(errorLoading);
		},
	}];
}
