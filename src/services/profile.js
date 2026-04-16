import { getCookie } from "react-use-cookie";

const token = getCookie("my_token");

export const changeName = (data) => {
  return fetch("https://invoice-app-api.mms-it.com/api/v2/dashboard/user-profile/change-name", {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};