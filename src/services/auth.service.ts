import { RegisterData } from '@/types/auth.model';
import { defaultPost } from './api.service';

export const createUser = async (data: RegisterData) => {
  return await defaultPost('/auth/register', data);
};
