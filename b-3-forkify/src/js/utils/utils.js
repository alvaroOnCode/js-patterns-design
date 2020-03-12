/**
 * Utils
 */

/**
 * Function to make HTTP requests (GET, POST, PUT, DELETE)
 */

export const request = (obj) => {
  if (!obj.method || !obj.url) {
    return;
  }

  if (!obj.async) {
    obj.async = false;
  }

  const method = obj.method.toLowerCase();

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, obj.url, obj.async);

    if (obj.headers) {
      Object.keys(obj.headers).forEach(key => {
        xhr.setRequestHeader(key, obj.headers[key]);
      });
    }

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.onerror = () => reject(xhr.statusText);
    obj.body ? xhr.send(obj.body) : xhr.send();
  });
};
