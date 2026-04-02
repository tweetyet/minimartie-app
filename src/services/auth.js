export const login= (data) => {
return fetch("https://invoice-app-api.mms-it.com/api/v2/login", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
    
}

export const register= (data) => {
return fetch("https://invoice-app-api.mms-it.com/api/v2/register", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
}
