"use client"
import Link from 'next/link';
import './globals.css'

export default async function Home() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <div>
    <main> <Link href="/cadastro" className='voltar'> CADASTRAR </Link>

      {produtos.map(produtos => (
        <div key={produtos.id}>
          <p>{produtos.nome}</p>
          <p>{produtos.preco}</p>
          <Link href={`/produto/${produtos.id}`}>ver mais</Link>
        </div> 
      ))}
    </main>
    </div>
  )
}