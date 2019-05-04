const apiCall = async (method = 'GET', path, data = {}) => {
  try {
    const response = await fetch(path, {
      method,
      body: method === 'GET' ? null : JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const apiClient = ['GET', 'POST', 'PUT', 'DELETE'].reduce(
  (acc, method) => {
    acc[method.toLowerCase()] = async (path, data) => apiCall(method, path, data);
    return acc;
  },
  {}
);