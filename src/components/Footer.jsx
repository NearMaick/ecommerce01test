import { InstagramLogo, WhatsappLogo } from "phosphor-react";

export function Footer() {
  return (
    <div>
      <footer className='my-4 p-4 flex items-center justify-between bg-gray-100 rounded-lg'>
        <div className='flex items-center p-2'>
          <InstagramLogo className='text-4xl text-pink-600' />
          <span className=' text-pink-600'>@fashionbr</span>
        </div>
        <div className='flex items-center p-2'>
          <WhatsappLogo className='text-4xl text-pink-600' />
          <span className=' text-pink-600'>+558199999999</span>
        </div>
      </footer>
    </div>
  );
}
