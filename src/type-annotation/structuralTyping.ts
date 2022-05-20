type VerifyUserFn = (user: User, receivedValues: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, receivedValues) => {
  return (
    user.username === receivedValues.username &&
    user.password === receivedValues.password
  );
};

const bdUser = { username: 'Rafael', password: '1337' };
const receivedValues = { username: 'Rafael', password: '1337' };
const loggedIn = verifyUser(bdUser, receivedValues);
console.log(loggedIn);
