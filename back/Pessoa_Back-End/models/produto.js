const db = require("../db");

class Produto {
  static async select() {
    try {
      const connect = await db.connect();
      const sql = "SELECT *FROM produtos"
      return await connect.query(sql);
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }
  static async selectOne(id) {
    try {
      const connect = await db.connect();
      const sql = "SELECT *FROM produtos WHERE id=$1";
      return await connect.query(sql,[id]); //usa o $ para segurançae e substitui valores
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }

  static async insert(data) {
    try {
      const connect = await db.connect();
      const sql = "INSERT INTO produtos(nome, data_cadastro, preco, descricao, imagem) VALUES ($1, $2, $3) RETURNING id, nome, data_cadastro, preco, descricao, imagem;";
      const values = [data.nome, data.data_cadastro, data.preco, data.descricao, data.imagem];
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em insert:', error);
      throw error;
    }
  }

  static async update(id, data) {
    try {
      const connect = await db.connect();
      const sql = "UPDATE produtos SET nome=$1, data_cadastro=$2, preco=$3, descricao=$4, imagem=$5 WHERE id=$6 RETURNING id, nome, data_cadastro, preco, descricao, imagem;";
      const values = [data.nome, data.data_cadastro, data.preco, data.descricao, data.imagem, id];
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em update:', error);
      throw error;
    }
  }

  static async Delete(id) {
    try {
      const connect = await db.connect();
      const sql = "DELETE FROM produtos WHERE id=$1 RETURNING id, nome, data_cadastro, preco, descricao, imagem;";
      return await connect.query(sql, [id]);
    } catch (error) {
      console.error('Erro em delete:', error);
      throw error;
    }
  }
}

module.exports = Produto;
