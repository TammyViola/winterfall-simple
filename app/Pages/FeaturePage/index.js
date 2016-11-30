/*
 * FeaturePage
 *
 * at the '/features' route
 *
 */

import React from 'react';
import { browserHistory } from 'react-router';
import Helmet from 'react-helmet';

import Button from 'Components/Button';
import styles from './styles.css';

class FeaturePage extends React.Component {
	openHomePage = () => {
		browserHistory.push('/');
	};

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<Helmet title="当前是第二页"/>
				<h1>
					当前是第二页
				</h1>
				<ul className={styles.list}>
					<li className={styles['list-item']}>
						<p className={styles['list-item-title']}>
							快速脚手架
						</p>
						<p>
							组件、页面、路由、选择器、请求服务自动化创建。
						</p>
					</li>
				</ul>
				<Button handleRoute={this.openHomePage}>首页</Button>
			</div>
		);
	}
}

export default FeaturePage;