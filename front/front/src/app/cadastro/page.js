'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [nome, setNome] = useState();
    const [data_cadastro, setData] = useState();
    const [preco, setPreco] = useState();
    const [descricao, setDescricao] = useState();
    const [imagem, setImagem] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const Produto = {
            nome: nome,
            data_cadastro: data_cadastro,
            preco: preco,
            descricao: descricao,
            imagem: imagem
        }
        const produtoJson = JSON.stringify(Produto);
        const req = fetch("http://localhost:3003/produto", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
        console.log(req)
    }

    return (
        <div className={styles.main}>
            <form className={styles.form} onSubmit={cadastrar}>
            <h1>Cadastrar Produtos</h1><br/>
                <input
                    className={styles.input}
                    type="text"
                    placeholder='Nome:'
                    nome="nome"
                    onChange={e => setNome(e.target.value)}
                /><br/>
                    <input
                    type="text"
                    placeholder='Descrição:'
                    nome="descricao"
                    onChange={e => setDescricao(e.target.value)}
                /><br/>
                <input
                    type="date"
                    placeholder='Data de Cadastro:'
                    nome="data_cadastro"
                    onChange={e => setData(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Preço:'
                    nome="preco"
                    onChange={e => setPreco(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Imagem:'
                    nome="imagem"
                    onChange={e => setImagem(e.target.value)}
                /><br/><br/>
                <button type='submit' className={styles.button}>Cadastrar</button>
                <br/>
                    <a className={styles.a} href='/'>Voltar</a>
            </form>
        </div>
    );
}