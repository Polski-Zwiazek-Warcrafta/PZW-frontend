import { getUserInfo } from '@/utils/auth.utils';

const apiUrl = 'http://127.0.0.1:5000';

const userInfo = getUserInfo();
console.log(userInfo);
export const defaultGet = async (
  url: string,
  auth = false,
  options: RequestInit = {}
): Promise<any> => {
  const response = await fetch(`${apiUrl}${url}`, {
    ...options,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(auth && userInfo && { Authorization: `Bearer ${userInfo.token}` }),
    },
  });

  return response.json();
};

export const defaultPost = async (
  url: string,
  body: any,
  auth = false,
  options: RequestInit = {}
): Promise<any> => {
  const response = await fetch(`${apiUrl}${url}`, {
    ...options,
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...(auth && userInfo && { Authorization: `Bearer ${userInfo.token}` }),
    },
  });

  return response.json();
};

export const defaultPut = async (
  url: string,
  body: any,
  auth = false,
  options: RequestInit = {}
): Promise<any> => {
  const response = await fetch(`${apiUrl}${url}`, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...(auth && userInfo && { Authorization: `Bearer ${userInfo.token}` }),
    },
  });

  return response.json();
};

export const defaultDelete = async (
  url: string,
  auth = false,
  options: RequestInit = {}
): Promise<any> => {
  const response = await fetch(`${apiUrl}${url}`, {
    ...options,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...(auth && userInfo && { Authorization: `Bearer ${userInfo.token}` }),
    },
  });

  return response.json();
};
