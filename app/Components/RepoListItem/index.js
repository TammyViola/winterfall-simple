/**
 * RepoListItem
 *
 */

import React from 'react';

import ListItem from 'Components/ListItem';
import IssueIcon from 'Components/IssueIcon';

import styles from './styles.css';

class RepoListItem extends React.Component {
    render() {
        const item = this.props.item;
        let nameprefix = '';
        
        // 如果我们获取到的数据repository被另外一个用户所拥有，
        // 这是个错误，我们需要把拥有者的名字显示出来
        if (item.owner.login !== this.props.currentUser) {
            nameprefix = `${item.owner.login}/`;
        }

        // 将repository的内容组合在一起
        const content = (
            <div className={styles['link-wrapper']}>
                <a
                    className={styles['link-repo']}
                    href={item.html_url}
                    target="_blank"
                >
                    {nameprefix + item.name}
                </a>
                <a
                    className={styles['link-issues']}
                    href={`${item.html_url}/issues`}
                    target="_blank"
                >
                    <IssueIcon className={styles['issue-icon']} />
                    {item.open_issues_count}
                </a>
            </div>
        );

        // 将内容渲染到一个list item中
        return (
            <ListItem key={`repo-list-item-${item.full_name}`} item={content} />
        );
    }
}

export default RepoListItem;
