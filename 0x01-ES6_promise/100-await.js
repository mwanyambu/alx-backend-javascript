import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};
  try {
    const pic = await uploadPhoto();
    const user = await createUser();
    result = { pic, user };
  } catch (err) {
    result = { pic: null, user: null };
  }
  return result;
}
