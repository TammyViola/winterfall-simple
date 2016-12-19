/**
 * Copyright (c) 2016-present, ecidi.
 * All rights reserved.
 * 
 * This source code is licensed under the GPL-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
 
import React from 'react';

import styles from './styles.css';

function List(props) {
    const ComponentToRender = props.component;
    let content = (<div></div>);

    if (props.items) {
        content = props.items.map((item, index) => (
            <ComponentToRender key={`item-${index}`} item={item} />
        ));
    } else {
        content = (<ComponentToRender />);
    }

    return (
        <div className={styles['list-wrapper']}>
            <ul className={styles.list}>
                {content}
            </ul>
        </div>
    );
}

List.propTypes = {
    component: React.PropTypes.func.isRequired,
    items: React.PropTypes.array,
};

export default List;
