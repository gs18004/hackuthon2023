import API from "../utils/axios";

export const getData = async () => {
  try {
    const { data } = await API.get(``);
    return data.result;
  } catch (e) {
    if (e.response?.data) {
      return e.response.data;
    }
    return {
      error: true,
      message: e.message,
    };
  }
};

export const postData = async (form) => {
  try {
    const { data } = await API.post(``, form);
    return data;
  } catch (e) {
    if (e.response?.data) {
      return e.response.data;
    }
    return {
      error: true,
      message: e.message,
    };
  }
};
