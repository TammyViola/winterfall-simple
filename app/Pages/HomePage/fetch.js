/**
 * 从Github获取user repositories
 */
import request from 'Utils/request';

/**
 * Github 响应 request/response 处理
 */
export function githubData(username, success, err) {
    const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

    request(requestURL, {}, success, err);
}
