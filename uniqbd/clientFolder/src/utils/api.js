import Cookies from "js-cookie";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001";

export const postData = async (url, formData) => {
  try {
    const response = await fetch(appUrl + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Cookies.get("accessToken") || ""}`,
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return { error: errorData };
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error:", err.message);
    return { error: err.message };
  }
};