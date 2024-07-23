import { getUser } from '@workos-inc/authkit-nextjs';
import { createCompany } from '../actions/workosActions';

export default async function NewCompanyPage() {
  const { user } = await getUser();

  async function handleNewCompanyFormSubmit(data: FormData) {
    'use server';
    if (user) {
      await createCompany(data.get('newCompanyName') as string, user.id);
    }
  }

  if (!user) {
    return <h1>Login to use this page</h1>;
  }

  return (
    <div className='container'>
      <h2 className='text-lg mt-6'>Create a new company</h2>
      <p className='text-gray-500 text-sm'>
        To create a job listing your first need to register a company
      </p>
      <form action={handleNewCompanyFormSubmit} className='flex gap-2'>
        <input
          className='p-2 border border-gray-400 mt-3 rounded-md'
          type='text'
          name='newCompanyName'
          placeholder='company name'
        />
        <button
          className='flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-md mt-3'
          type='submit'
        >
          Create company
        </button>
      </form>
    </div>
  );
}
