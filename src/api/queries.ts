import {apiconfig} from './apiconfig';
import {request} from './axios-utils';

export const getUsersQuery = () => {
  return request({url: apiconfig.urls.users, method: 'GET', token: false});
};
