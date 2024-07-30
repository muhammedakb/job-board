import { Skeleton } from '@radix-ui/themes';

export default function Loading() {
  return (
    <div className='container mt-8 my-6'>
      <div className='sm:flex'>
        <Skeleton>
          <div className='grow'>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <div>Lorem ipsum dolor.</div>
          </div>
        </Skeleton>
        <Skeleton className='w-auto h-auto max-w-16 max-h-16'>
          <div>image</div>
        </Skeleton>
      </div>
      <Skeleton className='mt-4'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
        adipisci, ipsam, deleniti natus optio ex a quidem sit, perspiciatis
        temporibus harum pariatur laudantium odio voluptates suscipit. Tenetur
        quo corporis quas! Eligendi, dolor, quia unde cupiditate impedit
        voluptatibus harum perferendis reiciendis neque nihil maiores tempora
        nostrum laborum. Laborum quam magnam placeat rerum neque, excepturi
        deserunt omnis dolor repellat voluptatem quaerat molestiae! Nemo, quas
        explicabo dolore quidem facere, dicta accusantium corrupti fugiat
        repellat necessitatibus inventore perspiciatis cupiditate culpa pariatur
        vero. Veniam laborum labore iste corporis commodi, voluptatem saepe
        officiis culpa velit asperiores?
      </Skeleton>
      <Skeleton width={'640px'} height={'170px'} className='mt-4' />
    </div>
  );
}
