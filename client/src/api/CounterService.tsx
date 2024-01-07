import axios, { AxiosResponse } from 'axios';

export const createNewUser = ( username: string ) =>
  createUser( username )
    .then( response => response.data.username )
    .catch( handleError );

export const fetchAllCounters = () =>
  getCounters()
    .then( response => response.data.counters )
    .catch( handleError );

export const incrementCounter = ( username: string ) =>
  increaseCounter( username )
    .then( response => response.data.counters )
    .catch( handleError );

const handleError = ( error: string ) => {
  console.error( error );
};

export const getCounters = (): Promise<AxiosResponse<{ counters: Record<string, number> }>> => {
  return axios.get(
    'http://localhost:4000/counters',
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
}

export const createUser = ( username: string ): Promise<AxiosResponse<{ username: string }>> => {
  return axios.post(
    'http://localhost:4000/login',
    {
      username,
    },
  )
}

export const increaseCounter = ( username: string ): Promise<AxiosResponse<{ counters: Record<string, number> }>> => {
  return axios.put(
    'http://localhost:4000/counters/' + username,
  )
}