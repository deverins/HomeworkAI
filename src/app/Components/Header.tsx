import React from 'react'
import bookIcon from '../../../public/book.svg'
import logo from '../../../public/logo.png'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <div className="flex justify-between mx-4 pt-1">
        <div className="flex w-[393px] h-[30px]">
          <Image
            src={logo}
            alt="logo icon"
            className="hidden max-sm:block lg:hidden md:hidden "
            width={0}
            height={0}
          />
        </div>
        <div className=" flex justify-end  mt-[22px] max-sm:w-[200px]">
          <Image
            src={bookIcon}
            alt="logo icon"
            width={0}
            height={0}
          />
        </div>
      </div>
    </header>
  )
}

export default Header