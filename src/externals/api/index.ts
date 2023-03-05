import queryString from "query-string";

export const api = {
  get: <TResponse>(url: string, body?: unknown) =>
    fetch(querify(url, body), { method: "GET" }).then(
      parseResponse<TResponse>
    ),
  post: <TResponse>(url: string, body?: unknown) =>
    fetch(url, bodify({ method: "POST" }, body)).then(parseResponse<TResponse>),
};

function querify(url: string, body?: unknown): string {
  if (!body) {
    return url;
  }
  return `${url}?${queryString.stringify(body)}`;
}

function bodify(init: RequestInit, body?: unknown): RequestInit {
  const result = {
    ...init,
    headers: {
      ...init.headers,
      "Content-Type": "application/json",
      credentials: "include",
    },
  };
  return body
    ? {
        ...result,
        body: JSON.stringify(body),
      }
    : result;
}

async function parseResponse<TA>(response: Response): Promise<TA> {
  if (!response.ok) {
    if (!response.headers?.get("Content-Type")?.includes("application/json")) {
      return Promise.reject(response.statusText);
    }

    const error = (await response.json()) as { message?: string };
    if (error && error?.message) {
      return Promise.reject(error.message);
    }
    return Promise.reject(response.statusText);
  }
  return response.json();
}
