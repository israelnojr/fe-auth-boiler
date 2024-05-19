import axios from 'axios';

export const checkEmailExists = async (email: string) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/check-email`, { email });
    return response.data.exists;
  } catch (error) {
    console.error('Error checking email', error);
    throw error;
  }
};


export const checkEmailAndPassword = async (email: string) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/check-email-and-password`, { email });
    return response.data.valid;
  } catch (error) {
    console.error('Error checking email and password', error);
    throw error;
  }
};