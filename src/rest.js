import reduxApi from 'redux-api';
import home from './features/home/rest';


const adapter = (fetch) => {
  return function (url, opts) {
    return fetch(url, opts).then((response) => {
      if (response.status != 200) {
        return response.json().then((data) => {
          return {
            status: response.status,
            detail: data.detail,
          };
        });
      }
      return response.json();
    });
  };
};
export default reduxApi({
  ...home,
}).use("fetch", adapter(fetch));

