import store from "../redux/store";
import fetch from "isomorphic-fetch";

export async function execFetch(path: string, method: string = "get", body: any = undefined) {
  try {
    const token = store.getState().auth.token;

    const response = await fetch(path, {
      method,
      headers: new Headers({
        "Content-Type": "application/json",
        "x-auth-token": (token && token) || "",
      }),
      body: (body && JSON.stringify(body)) || body,
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      const { message } = await response.json();
      let msg = "";
      if (Array.isArray(message)) msg = message.map((m) => m.msg).toString();
      else msg = message;
      return { success: false, message: msg };
    }
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}
