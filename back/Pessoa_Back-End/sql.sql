CREATE TABLE produtos(
 id SERIAL PRIMARY KEY NOT NULL,
 nome TEXT NOT NULL,
 data_cadastro DATE NOT NULL,
 preco MONEY NOT NULL,
 descricao TEXT NOT NULL,
 imagem TEXT NOT NULL
);

INSERT INTO produtos (nome,data_cadastro,preco,descricao,imagem)
VALUES
('Hot Dog com Queijo','2022/02/22',11.00,'Queijo, salsicha, molho, milho e batata palha','https://meucachorroquente.com.br/wp-content/uploads/2021/08/como-fazer-cachorro-quente-com-queijo.jpg'),
('Hot Dog com Frango','2022/05/13',12.00,'Frango, salsicha, molho, milho e batata palha','https://uploads.metropoles.com/wp-content/uploads/2020/05/22175123/Hot-Dog-%C3%81guas-Claras_Easy-Resize.com_.jpg'),
('Hot Dog de Bacon','2022/09/04',16.00,'Bacon,salsicha, molho, milho e batata palha', 'https://receitinhas.com.br/wp-content/uploads/2022/11/Cachorro-quente-com-queijo-e-bacon-Receiteria-1-1200x738.jpg'),
('Hot Dog 4 Queijos','2022/01/05',17.00,'Catupiry, cheddar, musarela, provolone, salsicha, molho, milho e batata palha','https://media-cdn.tripadvisor.com/media/photo-s/16/53/b4/f8/hot-dog-quatro-queijos.jpg'),
('Hot Dog Completo','2022/10/06',30.00,'Tudo o voce tem direito','https://guiadacozinha.com.br/wp-content/uploads/2019/11/cachorro-quente-completo.jpg'),
('X-Salada','2022/12/07',24.00,'Hamburguer, tomate, alface, molho, milho e batata palha','https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2016/11/x-salada-classico.jpg?fit=1200%2C675&ssl=1'),
('X-Bacon','2022/03/08',24.00,'Hamburguer, bacon, milho e batata palha','https://embutidosbonatti.ind.br/temp/xxx-57-1920x1080m1.jpg'),
('X-Calabresa','2022/09/09',24.00,'Hamburguer, calabresa, milho e batata palha','https://as2.ftcdn.net/v2/jpg/03/46/86/43/1000_F_346864355_rRYqZWr9krtkjXVUdVtrCJlFCPnBP9w6.jpg'),
('X-Egg','2022/12/04',24.00,'Hamburguer, ovo,milho e batata palha','https://assets.unileversolutions.com/recipes-v2/106685.jpg'),
('X-Burguer','2022/06/10',23.00,'Hamburguer,milho e batata palha','https://www.sabornamesa.com.br/media/k2/items/cache/bf26253d7b8f171dddb155f84ce1d562_XL.jpg'),
('X-Tudo','2022/07/11',30.00,'Tudo o voce tem direito','https://sachefmio.blob.core.windows.net/fotos/14-x-tudo-duplo-89280.jpg'),
('Pastel de Carne','2022/08/10',7.00,'Experimente opções como pastel de carne','https://www.sabornamesa.com.br/images/receitas/pins_image/r2179-pastel-de-carne-pin.jpg'),
('Pastel de Frango','2022/09/12',7.00,'Experimente opções como pastel de frango','https://loja.barracadoze.com.br/wp-content/uploads/sites/5/2020/10/pastel-frango-com-catupiry.jpg'),
('Pastel de Calabresa','2022/09/13',7.00,'Pastel saboroso e quentinho','https://receitassemsegredos.com.br/wp-content/uploads/2023/02/Pastel-de-Calabresa-Com-Queijo.webp'),
('Pastel de Bacon','2022/08/15',7.00,'Pastel saboroso e quentinho','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSwxtGwgp6wwXmWVq9knkteTaeroICsMqNw&usqp=CAU'),
('Pastel de Pizza','2022/06/17',7.00,'Pastel saboroso e quentinho','https://pedimais.com.br/uploads/84/1625062018.webp'),
('Pastel de Lombo','2022/04/18',7.00,'Pastel saboroso e quentinho','https://spaziosabor.com.br/wp-content/uploads/2022/02/pastel-de-feira.jpg'),
('Coca-Cola','2022/03/22',5.00,'Refrigerante Lata ou 2L', 'https://cdn.awsli.com.br/600x1000/784/784082/produto/197207213/refrigerante-coca-cola-sabor-original-350ml-e5f2e9df43.jpg'),
('Guaraná','2022/02/25',5.00,'Refrigerante Lata ou 2L','https://www.galaxcommerce.com.br/sistema/upload/1994/produtos/refrigerante-guarana-antarctica-lata-350-ml_2020-11-24_14-10-38_0_535.jpeg'),
('Sprite','2022/02/30',5.00,'Refrigerante Lata ou 2L','https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/1982-refrigerante-sprite-lata-350ml.jpg?s=12b9aa8e48f64db11c35440959f9e57e'),
('Fanta Laranja','2022/01/29',5.00,'Refrigerante Lata ou 2L','https://cdn.awsli.com.br/600x1000/784/784082/produto/197210040/refrigerante-fanta-sabor-laranja-350ml-594a05a7f6.jpg'),
('Fanta Uva','2022/07/31',5.00,'Refrigerante Lata ou 2L','https://images.tcdn.com.br/img/img_prod/858764/refrigerante_fanta_uva_mini_220ml_c_06_859_1_59de4587abf06d97cbdae8f725c07f68.jpg'),
('Skol','2022/08/29',6.00,'Cerveja Skol Puro Malte Lata 269m', 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/132-cerveja-skol-pilsen-lata-350ml.jpg?s=150d41e570e18d0fe015f852e5451262');


