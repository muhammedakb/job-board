'use client';
import type { Job } from '@/models/Job';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import CustomTimeAgo from './TimeAgo';
import Link from 'next/link';
import axios from 'axios';

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
            <div>
              <Link
                href={`/jobs/${jobInfo.orgId}`}
                className='text-gray-500 text-sm hover:underline'
              >
                {jobInfo.orgName || '-'}
              </Link>
            </div>
            <div className='font-bold text-lg mb-1'>
              <Link className='hover:underline' href={`/show/${jobInfo._id}`}>
                {jobInfo.title}
              </Link>
            </div>
            <div className='text-gray-400 text-sm capitalize'>
              {jobInfo.remote} &middot; {jobInfo.city}, {jobInfo.country}{' '}
              &middot; {jobInfo.type}-time
              {jobInfo.isAdmin && (
                <>
                  {' '}
                  &middot; <Link href={`/jobs/edit/${jobInfo._id}`}>
                    Edit
                  </Link>{' '}
                  &middot;{' '}
                  <button
                    type='button'
                    onClick={async () => {
                      await axios.delete(`/api/jobs?id=${jobInfo._id}`);
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
          {jobInfo.createdAt && (
            <div className='content-end text-gray-500 text-sm'>
              <CustomTimeAgo createdAt={jobInfo.createdAt} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
