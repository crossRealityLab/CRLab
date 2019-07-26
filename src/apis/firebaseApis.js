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
  return db
    .ref(`${endpoint}/${uuid}`)
    .once('value')
    .then(data => data.val())
    .catch(e => {
      console.error(`GET ${endpoint} ${uuid} ERROR: ${e}`);
      throw e;
    });
};