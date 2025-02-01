const apiUrl = 'http://127.0.0.1:5000';

export const defaultGet = async (
  url: string,
  options: RequestInit = {}
): Promise<any> => {
  const response = await fetch(`${apiUrl}${url}`, {
    ...options,
    method: 'GET',
  });

  return response.json();
};

export const defaultPost = async (
  url: string,
  body: any,
  options: RequestInit = {}
): Promise<any> => {
  const response = await fetch(`${apiUrl}${url}`, {
    ...options,
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export const defaultPut = async (
  url: string,
  body: any,
  options: RequestInit = {}
): Promise<any> => {
  const response = await fetch(`${apiUrl}${url}`, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(body),
  });

  return response.json();
};

export const defaultDelete = async (
  url: string,
  options: RequestInit = {}
): Promise<any> => {
  const response = await fetch(`${apiUrl}${url}`, {
    ...options,
    method: 'DELETE',
  });

  return response.json();
};
