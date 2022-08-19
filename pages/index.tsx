import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <h1 className='text-6xl font-bold'>Welcome!</h1>

        <div className='mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full'>
          <a
            href='https://github.com/MoralisWeb3/react-moralis'
            target='_blank'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
            rel='noreferrer'
          >
            <h3 className='text-2xl font-bold'>Next.js Examples</h3>
          </a>
          <a
            href='https://docs.moralis.io/'
            target='_blank'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
            rel='noreferrer'
          >
            <h3 className='text-2xl font-bold'>Moralis Docs</h3>
          </a>
          <a
            href='https://github.com/MoralisWeb3/Moralis-JS-SDK'
            target='_blank'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
            rel='noreferrer'
          >
            <h3 className='text-2xl font-bold'>Moralis JS SDK</h3>
          </a>
          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            target='_blank'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
            rel='noreferrer'
          >
            <h3 className='text-2xl font-bold'>React Moralis repo</h3>
          </a>
          <a
            href='https://ethereum.org/en/developers/'
            target='_blank'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
            rel='noreferrer'
          >
            <h3 className='text-2xl font-bold'>Ethereum Dev Resources</h3>
          </a>
          <a
            href='https://www.avax.network/developers'
            target='_blank'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
            rel='noreferrer'
          >
            <h3 className='text-2xl font-bold'>Avalanche Dev Resources</h3>
          </a>
        </div>
      </main>

      <footer className='flex h-24 w-full items-center justify-center border-t'>
        <a className='flex items-center justify-center gap-2' href='/' target='_blank' rel='noopener noreferrer'>
          Powered by <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
