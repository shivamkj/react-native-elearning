import {useState, useEffect} from 'react';
import {LoadingIndicator} from '../components';
import {useGlobalContext} from './globalContext';

const useFetch = (
  apiFunc,
  dependency = [],
  shimmerLayout = LoadingIndicator,
) => {
  const [data, setData] = useState(null);
  const {dispatch} = useGlobalContext();

  useEffect(() => {
    dispatch({type: 'loading', payload: shimmerLayout});

    apiFunc
      .then(result => {
        const response = result.data.response;
        if (response == 100) {
          setData(result.data);
          dispatch({type: 'loading', payload: false});
        } else if (response == 203) {
          setData(false);
          dispatch({type: 'loading', payload: false});
        } else if (response == 301 || response == 302)
          dispatch({type: 'auth', payload: false});
        else throw result.data.msg || 'Error Occured While Fetching Data';
      })
      .catch(err => {
        if (err.message == 'Network Error')
          dispatch({type: 'loading', payload: false});
        else dispatch({type: 'error', payload: err});
      });
  }, dependency);

  return data;
};

export default useFetch;
