/**
 * routes.js
 *
 * 整个应用的路径配置
 * 
 */

const errorLoading = (err) => {
	console.error('动态页面加载失败！', err);
};

const loadModule = (cb) => (componentModule) => {
	cb(null, componentModule.default);
};

export default function createRoutes() {
	return [{
		path: '/',
		getComponent(nextState, cb) {
			Promise.all([
				System.import('Pages/HomePage'),
			]).then(([component]) => {
				loadModule(cb)(component);
			}).catch(errorLoading);
		},
	}, {
		path: '/features',
		getComponent(nextState, cb) {
			Promise.all([
				System.import('Pages/FeaturePage'),
			]).then(([component]) => {
				loadModule(cb)(component);
			}).catch(errorLoading);
		},
	}];
}
