const express = require('express');
const path = require('path');
const Produto = require("./models/produto");
const cors= require('cors');
const app = express();
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/produtos', async function(req, res){
  try {
    var produtos = await Produto.Select();
    res.json(produtos.rows);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produtos' });
  }
});

app.get('/produto', async function(req, res){
  try {
    var produtos = await Produto.Select();
    res.json(produtos.rows);
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produto' });
  }
});

app.post('/produtos', async function(req, res){
  try {
    var produtos = await Produto.SelectOne(req.body.id);
    res.json(produtos.rows[0]);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produtos' });
  }
});

app.post('/produto', async function(req,res){
  try{
    var produto = req.body
    var produto = await Produto.Insert(produto);
    res.json(produto.rows)
  }catch(error){
    console.log("error")
  }
})

app.delete('/produtos', async function(req, res){
  try {
    console.log(req.body.id)
    var produto = await 
    Produto.Delete(req.body.id);
    res.json(produto.rows);
  } catch (error) {
    console.error('Erro ao deletar produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao deletar produtos' });
  }
});

app.delete('/produto', async function(req, res){
  try {
    console.log(req.body.id)
    var produto = await
    Produto.Delete(req.body.id);
    res.json(produto.rows);
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao deletar produto' });
  }
});


app.listen(3003, function() {
  console.log(`app de Exemplo escutando na porta! ${3003}`)
});
