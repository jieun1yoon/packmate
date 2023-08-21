import { Auth } from 'aws-amplify';

export const signOut = async () => {
  await Auth.signOut();
};
