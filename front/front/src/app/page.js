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
    <main> 
      <h1>Nossos Produtos</h1><br/>
      <a href="/cadastro" className='voltar'> CADASTRAR </a>
        <br/>
      {produtos.map(produto => (
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <p>{produto.preco}</p>
          <a href={`/produto/${produto.id}`}>ver mais</a>
        </div> 
      ))}
    </main>
    </div>
  )
}