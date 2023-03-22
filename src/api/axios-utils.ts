import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';

import {QueryClient} from 'react-query';
import {apiconfig} from './apiconfig';
export const client = axios.create({
  baseURL: apiconfig.base_url,
});
export const queryClient = new QueryClient();

interface axiosInterface extends AxiosRequestConfig {
  token: boolean;
}

export const request = async ({...options}: axiosInterface) => {
  //   const authToken = await localStorage.getItemObject('token');
  //   if (!options?.config?.removeTokenFromHeader) {
  //     client.defaults.headers.common.Authorization = 'Bearer ' + authToken;
  //   }
  //   client.defaults.headers.common['User-Agent'] = Platform.OS;
  //   if (options?.config?.formData) {
  //     client.defaults.headers.common['Content-Type'] =
  //       'multipart/form-data; boundary=----WebKitFormBoundaryZkVzYWcv1eRkiBfi';
  //   }
  //   if (options?.config?.accountingCompanyId) {
  //     client.defaults.headers.common['X-COMPANY-ID'] = getAccountingCompanyId(
  //       UserRef?.current?.userData?.companies,
  //     );
  //   }
  // if options.token === false

  //   client.defaults.headers.common['X-APP-VERSION'] = config.appVersion;
  //   client.defaults.headers.common['X-APP-TYPE'] = 'MOBILE';
  const onSuccess = (response: AxiosResponse<any, any>) => {
    return response?.data;
  };
  const onError = (error: Promise<any>) => {
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
