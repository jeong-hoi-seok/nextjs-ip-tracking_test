import React from 'react';

import { getClientIP, getLocationInfo } from './utils/actions';

const Page = async () => {
  const clientIP = getClientIP();
  const locationInfo = await getLocationInfo(clientIP);

  return (
    <section className='p-4'>
      <h1 className='mb-6 text-3xl font-bold'>방문자 정보</h1>
      <div className='mb-3'>
        <p className='text-sm font-bold text-slate-400'>IP 주소</p>
        <h2 className='text-2xl font-bold text-red-500'>
          {clientIP || '알 수 없음'}
        </h2>
      </div>
      <div>
        <p className='text-sm font-bold text-slate-400'>Response 정보</p>
        <p>
          {locationInfo
            ? JSON.stringify(locationInfo)
            : '위치 정보를 찾을 수 없습니다.'}
        </p>
      </div>
    </section>
  );
};

export default Page;
