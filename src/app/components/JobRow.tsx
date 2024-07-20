import { faBookmark } from '@fortawesome/free-regular-svg-icons';
// import { faBookmark as solidFaBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function JobRow() {
  return (
    <div className='bg-white p-4 rounded-lg shadow-sm relative'>
      <div className='absolute cursor-pointer right-4 top-4'>
        <FontAwesomeIcon className='size-4 text-gray-400' icon={faBookmark} />
      </div>
      <div className='flex gap-4 grow'>
        <div className='content-center'>
          {/* TODO: will be change with <Image /> */}
          <img
            src='https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png'
            className='size-12'
          />
        </div>
        <div className='grow sm:flex'>
          <div className='grow'>
            <div className='text-gray-500 text-sm'>Spotify</div>
            <div className='font-bold text-lg mb-1'>Product Designer</div>
            <div className='text-gray-500 text-sm'>
              Remote &middot; New York, US | Full-time
            </div>
          </div>
          <div className='content-end text-gray-500 text-sm'>2 weeks ago</div>
        </div>
      </div>
    </div>
  );
}
