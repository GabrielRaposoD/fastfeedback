import firebase from './firebase';

export async function getAllFeedback(siteId) {
  const snapshot = await firebase
    .firestore()
    .collection('feedback')
    .where('siteId', '==', siteId)
    .get();

  const feedback = [];

  snapshot.forEach((doc) => {
    feedback.push({ id: doc.id, ...doc.data() });
  });

  return feedback;
}

export async function getAllSites() {
  try {
    const snapshot = await firebase.firestore().collection('sites').get();
    const sites = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    return { sites };
  } catch (error) {
    return { error };
  }
}
