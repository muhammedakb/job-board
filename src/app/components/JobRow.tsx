'use client';

import type { Job } from '@/models/Job';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import TimeAgo from 'react-timeago';

export default function JobRow({ jobInfo }: { jobInfo: Job }) {
  return (
    <div className='bg-white p-4 rounded-lg shadow-sm relative'>
      <div className='absolute cursor-pointer right-4 top-4'>
        <FontAwesomeIcon className='size-4 text-gray-400' icon={faBookmark} />
      </div>
      <div className='flex gap-4 grow'>
        <div className='content-center'>
          {jobInfo.jobIcon && (
            <Image
              alt='jobIcon'
              src={jobInfo.jobIcon}
              className='size-12'
              width={1024}
              height={1024}
            />
          )}
        </div>
        <div className='grow sm:flex'>
          <div className='grow'>
            <div className='text-gray-500 text-sm'>
              {jobInfo.orgName || '-'}
            </div>
            <div className='font-bold text-lg mb-1'>{jobInfo.title}</div>
            <div className='text-gray-500 text-sm'>
              {jobInfo.remote} &middot; {jobInfo.city}-{jobInfo.state},
              {jobInfo.country} | {jobInfo.type}
            </div>
          </div>
          {jobInfo.createdAt && (
            <div className='content-end text-gray-500 text-sm'>
              <TimeAgo date={jobInfo.createdAt} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
