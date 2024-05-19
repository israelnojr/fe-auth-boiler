import axios from 'axios';

export const socialLogin = (provider: string) => {
  window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/redirect/${provider}`
  console.log(window.location.href)
};
