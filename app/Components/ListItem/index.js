/**
 * Copyright (c) 2016-present, ecidi.
 * All rights reserved.
 * 
 * This source code is licensed under the GPL-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
 
import React from 'react';

import styles from './styles.css';

function ListItem(props) {
	return (
		<li className={props.className || styles.item}>
			<div className={styles['item-content']}>
				{props.item}
			</div>
		</li>
	);
}

ListItem.propTypes = {
	className: React.PropTypes.string,
	item: React.PropTypes.any,
};

export default ListItem;
