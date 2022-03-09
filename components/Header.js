import{
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from 'next/image'
import HeaderItem from './HeaderItem';
import { useState } from "react";

const Header = () => {

  return (
    <>
      <header className="flex flex-col sm:flex-row m-3 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>

        <Image
          className="object-contain select-none"
          src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
          width={200}
          height={100}
        />
      </header>

      <div className="flex items-center justify-center mb-8 select-none cursor-pointer hover:animate-bounce font-mono ">
        <a href="https://www.linkedin.com/in/mishrahimanshu070/" target="anything">
          {" "}
          <div>Made with ❤️ by Himanshu Mishra</div>
        </a>
      </div>
    </>
  );
}

export default Header