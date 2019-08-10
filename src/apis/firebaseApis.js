import firebase from '../firebase';

const db = firebase.database();

export const getAll = (endpoint) => {
  return db
    .ref(endpoint)
    .orderByChild('timestamp')
    .once('value')
    .then(data => data.val())
    .catch(e => {
      console.error(`GET ALL ${endpoint} ERROR`, e);
      throw e;
    });
};

export const get = (endpoint, uuid) => {
  const url = uuid ? `${endpoint}/${uuid}` : endpoint;
  return db
    .ref(url)
    .once('value')
    .then(data => data.val())
    .catch(e => {
      console.error(`GET ${url} ERROR: ${e}`);
      throw e;
    });
};