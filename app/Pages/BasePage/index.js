/**
 *
 * BasePage.react.js
 *
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
