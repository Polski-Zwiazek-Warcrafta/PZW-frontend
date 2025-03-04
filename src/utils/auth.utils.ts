import store from '@/store';

export const saveUserInfoToLocalStorage = (
  token: string,
  isAdmin: boolean
): void => {
  localStorage.setItem('user', JSON.stringify({ token, isAdmin }));
  store.dispatch('saveUser', { token, isAdmin });
};

export const saveUserInfoToSessionStorage = (
  token: string,
  isAdmin: boolean
): void => {
  sessionStorage.setItem('user', JSON.stringify({ token, isAdmin }));
  store.dispatch('saveUser', { token, isAdmin });
};

export const getUserInfo = (): { token: string; isAdmin: boolean } | null => {
  if (store.state.token && store.state.isAdmin) {
    return { token: store.state.token, isAdmin: store.state.isAdmin };
  }

  const user = localStorage.getItem('user') || sessionStorage.getItem('user');

  if (!user) return null;

  return JSON.parse(user);
};
