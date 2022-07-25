import { InstagramLogo, List, WhatsappLogo } from "phosphor-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className='mr-4'>
      <header className='w-full m-2 my-2 p-2 flex items-center justify-between bg-gray-100 rounded-lg'>
        <Link to='/coaching'>
          <List className='text-4xl text-pink-600' />
        </Link>
        <Link to='/'>
          <img
            className='h-16'
            src='https://w7.pngwing.com/pngs/705/499/png-transparent-fashion-design-model-dresses-miscellaneous-fashion-flower.png'
            alt='Logo de uma mulher com vestido'
          />
        </Link>
        <div>
          <InstagramLogo className='text-4xl text-pink-600' />
          <WhatsappLogo className='text-4xl text-pink-600' />
        </div>
      </header>
    </div>
  );
}
