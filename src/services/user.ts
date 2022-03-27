import { User } from 'typings/global';
import firebase from 'libs/firebase';

const firestore = firebase.firestore();

export const UserService = {
  create: (data: User) => {
    return firestore
      .collection('users')
      .doc(data.uid)
      .set({ ...data }, { merge: true });
  },
};

export default UserService;
