import { useAuthStore } from "../stores";

type Method = "GET" | "POST" | "PUT" | "DELETE";

export const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

function request(method: Method) {
  return (url: string, body?: Record<string, unknown>): Promise<unknown> => {
    const headers: any = authHeader(url);
    const requestOptions: RequestInit = {
      method,
      headers,
      // body: body ? JSON.stringify(body) : undefined,
    };

    if (body) {
      // requestOptions.headers["Content-Type"] = "application/json";
      headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(body);
    }
    return fetch(url, requestOptions).then(handleResponse);
  };
}

// helper functions
function authHeader(url: string): Record<string, string> {
  // return auth header with jwt if user is logged in and request is to the api url
  const { user } = useAuthStore();

  const isLoggedIn = user;
  const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);

  if (isLoggedIn && isApiUrl) {
    const token = (user as string);
    return { user_token: `${token}` };
  } else {
    return {};
  }
}

async function handleResponse(response: Response): Promise<unknown> {
  const isJson = response.headers?.get("content-type")?.includes("application/json");
  const data = isJson ? await response.json() : null;

  // check for error response
  if (!response.ok) {
    const { user, logout } = useAuthStore();
    if ([401, 403].includes(response.status) && user) {
      // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      logout();
    }

    // get error message from body or default to response status
    const error = (data && data.message) || response.status;
    return Promise.reject(error);
  }

  return data;
}