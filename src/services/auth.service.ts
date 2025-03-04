import { LoginData, RegisterData } from '@/types/auth.model';
import { defaultGet, defaultPost } from './api.service';

export const createUser = async (data: RegisterData) => {
  return await defaultPost('/auth/register', data);
};

export const loginUser = async (data: LoginData) => {
  return await defaultPost('/auth/login', data);
};

export const getUserList = async () => {
  return await defaultGet('/auth/users', true);
};
