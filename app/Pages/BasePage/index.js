/**
 * Copyright (c) 2016-present, ecidi.
 * All rights reserved.
 * 
 * This source code is licensed under the GPL-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * BasePage
 */

import React from 'react';
import Helmet from 'react-helmet';
import 'sanitize.css/sanitize.css';

import Footer from 'Components/Footer';
import styles from './styles.css';

class BasePage extends React.Component {
	render() {
	    return (
	        <div className={styles.wrapper}>
	            <Helmet titleTemplate="%s - Ecidi"/>
	            {React.Children.toArray(this.props.children)}
	            <Footer />
	        </div>
	    );
	}
}

export default BasePage;
