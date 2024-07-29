import React from 'react'
import bookIcon from '../../../public/book.svg'
import Image from 'next/image'

const BottomIcon = () => {
  return (
    <div className='hidden max-sm:block lg:hidden md:hidden '>
      <div className="md:w-auto md:h-auto w-auto h-auto max-sm:w-[130px] ml-10 max-sm:h-[14px] fixed top-[615px] lg:w-auto lg:h-auto">
            <Image
              src={bookIcon}
              alt="logo icon"
              width={393}
              height={932}
            />
          </div>
    </div>
  )
}

export default BottomIcon