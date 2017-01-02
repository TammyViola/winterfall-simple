/**
 * Copyright (c) 2016-present, ecidi.
 * All rights reserved.
 *
 * This source code is licensed under the GPL-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 从Github获取用户项目列表
 */

import request from 'Utils/request';

// Github 响应 request/response 处理
export function githubData(username, success, err) {
    const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

    request(requestURL, {}, success, err);
}
