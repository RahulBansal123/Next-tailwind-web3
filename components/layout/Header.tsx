import { useRouter } from 'next/router';
import { useWeb3React } from '@web3-react/core';

const Header = () => {
  const router = useRouter();
  const { account } = useWeb3React();

  return (
    <div className="container items-center w-11/12 md:w-full">
      <div className="flex mx-auto flex-col md:flex-row items-center md:justify-between border py-3 px-5 rounded-xl">
        <div className="flex flex-row space-x-2 items-center">
          <p
            className="text-xl font-bold text-blue-800 cursor-pointer"
            onClick={() => router.push('/')}
          >
            Template
          </p>
        </div>
        <div className="flex flex-row space-x-2 items-center cursor-pointer">
          <span className="overflow-ellipsis overflow-hidden">
            {account?.slice(0, 12)}...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
