/**
 * app.js
 *
 * 整个应用的总入口
 */

// import 'file?name=[name].[ext]!./favicon.ico';

// 引入第三方控件
import React from 'react';
import ReactDOM from 'react-dom';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';


// 建立router，包装所有的Routes到BasePage组件中。
import BasePage from 'Pages/BasePage';
import createRoutes from './routes';
const rootRoute = {
	component: BasePage,
	childRoutes: createRoutes(),
};

ReactDOM.render(
	<Router
		history={browserHistory}
		routes={rootRoute}
		render={
			// 跳转到新页面去时模仿游览器默认行为滚动到页面顶部。
			applyRouterMiddleware(useScroll())
		}
	/>,
	document.getElementById('app')
);

// 离线缓存机制
// 通过ServiceWorker和AppCache实现，需要配置webpack文件。
import { install } from 'offline-plugin/runtime';
install();
