import { jwtDecode } from "jwt-decode";

export const jwtParse = (token: string) => {
  try {
    const data = jwtDecode<any>(token);
    return {
      id: data["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
      username: data["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
      email: data["email"],
      phoneNumber: data["phoneNumber"],
      exp: data["exp"],
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
