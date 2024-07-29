'use client';

import { faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@radix-ui/themes';
import axios from 'axios';
import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';

export default function ImageUpload({
  icon,
  name,
}: {
  icon: IconDefinition;
  name: string;
}) {
  const fileInRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('');

  async function upload(ev: ChangeEvent<HTMLInputElement>) {
    const input = ev.target as HTMLInputElement;
    if (input && input.files?.length && input.files.length > 0) {
      try {
        setIsLoading(true);
        const file = input.files[0];
        const data = new FormData();
        data.set('file', file);
        const response = await axios.post('/api/upload', data);
        if (response?.data?.url) {
          setUrl(response.data.url);
        }
      } catch (error) {
        // pass
      } finally {
        // setIsLoading(false);
      }
    }
  }

  return (
    <>
      <div className='bg-gray-100 rounded-md size-24 inline-flex items-center content-center justify-center'>
        {url ? (
          <Image
            src={url}
            alt='uploaded image'
            width={1024}
            height={1024}
            className='w-auto h-auto max-w-24 max-h-24'
            onLoadingComplete={() => {
              setIsLoading(false);
            }}
          />
        ) : isLoading ? (
          <FontAwesomeIcon
            icon={faSpinner}
            className='text-gray-400 animate-spin'
          />
        ) : (
          <FontAwesomeIcon icon={icon} className='text-gray-400' />
        )}
      </div>
      <input type='hidden' name={name} value={url} />
      <div className='mt-2'>
        <input
          ref={fileInRef}
          onChange={upload}
          type='file'
          className='hidden'
        />
        <Button
          type='button'
          onClick={() => fileInRef.current?.click()}
          variant='soft'
        >
          select file
        </Button>
      </div>
    </>
  );
}
