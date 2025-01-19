'use server';

import { headers } from 'next/headers';

export const getClientIP = () => {
  const headersList = headers();

  const xForwardedFor = headersList.get('x-forwarded-for');
  if (xForwardedFor) {
    return xForwardedFor.split(',')[0];
  }

  const xRealIP = headersList.get('x-real-ip');
  if (xRealIP) {
    return xRealIP;
  }

  return null;
};

export const getLocationInfo = async (ip: string | null) => {
  try {
    const res = await fetch(`https://demo.ip-api.com/json/${ip}`);
    const result = await res.json();

    return result;
  } catch (error) {
    console.error('위치 정보를 가져오는데 실패했습니다:', error);

    return null;
  }
};
