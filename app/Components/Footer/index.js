
import React from 'react';

import styles from './styles.css';

function Footer() {
	return (
		<footer className={styles.footer}>
			<section>
				<p>这个项目基于 MIT 开源协议.</p>
			</section>
			<section>
				<p>制作： 浙江华东工程数字技术有限公司.</p>
			</section>
		</footer>
	);
}

export default Footer;