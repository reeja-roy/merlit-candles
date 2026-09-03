import axios from "axios";

export const handleLoginSubmit = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND}/login`,
      data,
    );
    
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const handleRegisterSubmit = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND}/signup`,
      data,
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return err
  }
};
