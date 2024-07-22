import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {baseURL} from './config';
import NetInfo from '@react-native-community/netinfo';

export const storeData = async data => {
  try {
    await AsyncStorage.setItem('user_data', JSON.stringify(data));
  } catch (error) {
    console.log('storeData err', error);
    console.log('storeToken error', error);
  }
};

export const getStorageData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('user_data');
    return JSON.parse(jsonValue);
  } catch (e) {
    console.log('getStorageData err', e);
  }
};

export const postMethod = async (url, body, token) => {
  try {
    let internet = await NetInfo.fetch();
    let StoredData = await getStorageData();
    const setHeader = () => {
      if (StoredData !== null) {
        return `Bearer ${StoredData.token}`;
      }
    };
    if (internet.isInternetReachable) {
      return await axios.post(baseURL + url, body, {
        headers: {
          Authorization: setHeader(),
          Accept: 'application/json',
        },
      });
    } else {
      console.log('postMethod error reason iss internet =>', internet);
      return internet.isInternetReachable;
    }
  } catch (e) {
    console.log('postMethod error reason isS =>', e);
    return e;
  }
};

export const getMethod = async (url, body) => {
  console.log('...', url + body);
  try {
    let internet = await NetInfo.fetch();
    let StoredData = await getStorageData();
    const setHeader = () => {
      if (StoredData.token !== null) {
        return `Bearer ${StoredData.token}`;
      }
    };
    if (internet.isInternetReachable) {
      return await axios.get(baseURL + url, {
        headers: {
          Authorization: setHeader(),
          Accept: 'application/json',
        },
      });
    } else {
      console.log('getMethod error reason is internet =>', internet);
      return internet.isInternetReachable;
    }
  } catch (e) {
    console.log('getMethod error reason is =>', e);
    return e;
  }
};

// export const FormPostMethod = async (url, formData) => {
//   console.log('FormPostMethodddd', formData);
//   try {
//     let internet = await NetInfo.fetch();
//     let StoredData = await getStorageData();
//     const setHeader = () => {
//       if (StoredData.token !== null) {
//         return `Bearer ${StoredData.token}`; // Token
//       }
//     };
//     if (internet.isInternetReachable) {
//       return await axios.post(baseURL + url, formData, {
//         maxBodyLength: 'infinity',
//         headers: {
//           Authorization: setHeader(),
//           Accept: 'application/json',
//           'Content-Type': 'multipart/form-data; charset=utf-8;',
//         },
//       });
//     } else {
//       console.log('postMethod error reason is internet =>', internet);
//       return internet.isInternetReachable;
//     }
//   } catch (e) {
//     console.log('postMethod error reason is =>', e);
//     return e;
//   }
// };

export const FormPostMethod = async (url, body) => {
  console.log("FormPostMethod",body)
    try {
        let internet = await NetInfo.fetch();
        let StoredData = await getStorageData();
        const setHeader = () => {
            if (StoredData.token !== null) {
                return `Bearer ${StoredData.token}`; //Token
            }
        };

        if (internet.isInternetReachable) {
            return await axios.post(baseURL + url, body, {
                maxBodyLength: 'infinity',
                headers: {
                    Authorization: setHeader(),
                    'Accept': 'application/json',
                    "Content-Type": "multipart/form-data; charset=utf-8;"
                },
            });
        } else {
            console.log('postMethod error reason is internet =>', internet);
            return internet.isInternetReachable;
        }
    } catch (e) {
        console.log('postMethod error reason is =>', e);
        return e;
    }
};
