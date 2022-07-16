import Head from 'next/head';

import Header from '../../components/layout/Header';

const Main = ({ account }) => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-2">
      <Head>
        <title>Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container py-4 flex flex-col md:flex-row">
        <h1 className="text-center text-xl w-full">
          Welcome to the NextJS + Truffle + TailwindCSS template{' '}
        </h1>
      </div>
    </div>
  );
};

export default Main;
