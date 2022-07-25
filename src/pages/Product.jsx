import { ShoppingCart } from "phosphor-react";

export function Product() {
  return (
    <>
      <h1 className='font-bold uppercase text-xl p-2 text-gray-100 bg-pink-700 mx-2 rounded-lg text-center py-4'>
        Conjunto de Blusa Jeans com Calça de Algodão Salmão
      </h1>
      <img
        className='p-2 mx-auto rounded-2xl'
        src='https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        alt='roupa fashion'
      />
      <div className='grid grid-flow-col auto-cols-fr'>
        <button className='m-2 flex items-center justify-center rounded-lg bg-red-600'>
          <span className='py-4 px-8 mx-auto font-semibold text-lg text-gray-100'>
            P
          </span>
        </button>
        <button className='m-2 flex items-center justify-center rounded-lg bg-red-600'>
          <span className='py-4 px-8 mx-auto font-semibold text-lg text-gray-100'>
            M
          </span>
        </button>
        <button className='m-2 flex items-center justify-center rounded-lg bg-red-600'>
          <span className='py-4 px-8 mx-auto font-semibold text-lg text-gray-100'>
            G
          </span>
        </button>
        <button className='m-2 flex items-center justify-center rounded-lg bg-red-600'>
          <span className='py-4 px-8 mx-auto font-semibold text-lg text-gray-100'>
            GG
          </span>
        </button>
        <button className='m-2 flex items-center justify-center rounded-lg bg-red-600'>
          <span className='py-4 px-8 mx-auto font-semibold text-lg text-gray-100'>
            XG
          </span>
        </button>
      </div>
      <div className='mr-3.5'>
        <button className='m-2 w-full flex items-center rounded-lg bg-red-600'>
          <ShoppingCart className='border-r-2 ml-2 p-2 text-gray-100 text-5xl' />
          <span className='p-2 mx-auto font-semibold text-lg text-gray-100'>
            R$ 499,90
          </span>
        </button>
      </div>
      <p className='text-gray-700 font-medium text-justify mx-2'>
        Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu
        reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis
        que eu levo! Suco de cevadiss deixa as pessoas mais interessantis.
        Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
        Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito
        paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat.
        Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula
        non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique
        interdum.
      </p>
    </>
  );
}
