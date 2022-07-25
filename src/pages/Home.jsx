import { Eye, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1 className='font-bold uppercase text-3xl text-gray-100 bg-pink-700 mx-2 rounded-lg text-center py-4'>
        Mais Procurados
      </h1>
      <article>
        <img
          className='p-2 mx-auto rounded-2xl'
          src='https://images.unsplash.com/photo-1611042553484-d61f84d22784?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
          alt='roupa fashion'
        />
        <p className='text-pink-700 font-medium text-justify mx-2'>
          Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu
          reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os
          tombis que eu levo! Suco de cevadiss deixa as pessoas mais
          interessantis. Admodum accumsan disputationi eu sit. Vide electram
          sadipscing et per. Mé faiz elementum girarzis, nisi eros vermeio. Si u
          mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci
          ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum
          felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus
          tristique interdum.
        </p>
        <Link to='/products'>
          <button className='mt-4 w-[360px] mx-auto p-2 flex items-center rounded-lg bg-pink-600'>
            <Eye className='border-r-2 ml-2 p-2 text-gray-100 text-5xl' />
            <span className='p-2 mx-auto font-semibold text-lg text-gray-100'>
              Saiba Mais
            </span>
          </button>
        </Link>
      </article>

      <h1 className='font-bold uppercase text-2xl text-gray-800 text-center py-4'>
        Outras Ofertas
      </h1>

      <article>
        <img
          className='p-2 mx-auto rounded-2xl'
          src='https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          alt='roupa fashion'
        />
        <div className='flex flex-col'>
          <h2 className='p-2 mx-auto rounded-2xl font-semibold text-lg text-gray-800'>
            Conjunto de Blusa Jeans com Calça de Algodão Salmão
          </h2>

          <Link to='/products'>
            <button className='mt-4 p-2 w-[360px] mx-auto flex items-center rounded-lg bg-red-600'>
              <ShoppingCart className='border-r-2 ml-2 p-2 text-gray-100 text-5xl' />
              <span className='p-2 mx-auto font-semibold text-lg text-gray-100'>
                R$ 499,90
              </span>
            </button>
          </Link>
        </div>
      </article>

      <article>
        <img
          className='p-2 mx-auto rounded-2xl'
          src='https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          alt='roupa fashion'
        />
        <div className='flex flex-col'>
          <h2 className='p-2 mx-auto rounded-2xl font-semibold text-lg text-gray-800'>
            Conjunto de linho Cinza
          </h2>

          <Link to='/products'>
            <button className='my-4 p-2 w-[360px] mx-auto flex items-center rounded-lg bg-red-600'>
              <ShoppingCart className='border-r-2 ml-2 p-2 text-gray-100 text-5xl' />
              <span className='p-2 mx-auto font-semibold text-lg text-gray-100'>
                R$ 699,90
              </span>
            </button>
          </Link>
        </div>
      </article>

      <article>
        <img
          className='p-2 mx-auto rounded-2xl'
          src='https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
          alt='roupa fashion'
        />
        <div className='flex flex-col'>
          <h2 className='p-2 mx-auto rounded-2xl font-semibold text-lg text-gray-800'>
            Vestido Oriental
          </h2>

          <Link to='/products'>
            <button className='mt-4 p-2 w-[360px] mx-auto flex items-center rounded-lg bg-red-600'>
              <ShoppingCart className='border-r-2 ml-2 p-2 text-gray-100 text-5xl' />
              <span className='p-2 mx-auto font-semibold text-lg text-gray-100'>
                R$ 599,90
              </span>
            </button>
          </Link>
        </div>
      </article>
    </>
  );
}
