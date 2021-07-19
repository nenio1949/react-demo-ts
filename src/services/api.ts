import axios from './request';

const login = async (datas: object) => { // 登录
    return axios(`/auth/login`, 'POST', datas);
  };

const getMineInfo = async () => { // 获取自己信息（含应用和权限）
  return axios(`/api/mine`, 'GET');
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login,
    getMineInfo
};