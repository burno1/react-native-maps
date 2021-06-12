npm install

***

then go to src>api>server.js
put your ivp4 in the place of baseURL

then run the following command

json-server db.json --host < Your IPV4 >

A aplicação tem como objetivo a adição de pontos (`Marker`'s) no mapa. Algo como uma aplicação para a adição dos "meus locais favoritos". 

A cada clique longo no mapa o usuário deve ser levado a uma tela diferente onde preencherá dados sobre aquele ponto (título, descrição e qualquer outro dado que considerem
relevante). Ao salvar as alterações (e persistir os dados no JSON Server), a aplicação deve voltar a tela do mapa e apresentar os markers criados.

Ao clicar em um marker existente, a aplicação deve ir para uma tela com detalhes daquele marker e com um opção para removê-lo.
