# seubarriga
US2 – Login com sucesso /n
Dado que o usuario esteja na tela de login
Quando digitar email e senha validos
E clicar no botao entrar
Entao o sistema ira para a tela inicial

US2 – Cadastro novo usuario
Dado que o usuário esteja na tela de login
Quando clicar na opção Novo Usuário?
E preencher com nome, e-mail e senha 
Então o sistema emitira uma mensagem de sucesso 

US3 – Criar conta com sucesso
Dado que o usuário esteja logado 
Quando clicar no botão Conta 
E clicar na opção adicionar 
E preencher o campo nome 
E clicar em salvar 
Então o sistema emite uma mensagem de sucesso 

US3 – R1 – Excluir movimentações
Dado que o usuário esteja logado 
E navegue até a tela lista 
Quando clicar no botão de excluir 
E a conta tiver movimentações 
Então o sistema emite uma mensagem de erro 

US3 – R2 - Criar conta com nome ja cadastrado
Dado que o usuário esteja logado 
Quando clicar no botão Conta 
E clicar na opção adicionar 
E preencher o campo nome com uma conta já existente 
E clicar em salvar 
Então o sistema emite uma mensagem de erro

US4 Criar movimentação com sucesso
Dado que o usuário esteja logado 
Quando clicar no botão Criar Movimentação 
E preencher os dados da movimentação 
E clicar em salvar 
Então o sistema emite uma mensagem de sucesso 


US4 – R1 - Criar movimentação campos obrigatórios não preenchidos
Dado que o usuário esteja logado 
Quando o usuário clicar no botão Criar Movimentação 
E não preencher todos campos obrigatórios 
E clicar em salvar 
Então o sistema emite uma mensagem de erro 

US4 – R2  - Criar movimentação com data invalida
Dado que o usuário esteja logado 
Quando clicar no botão Criar Movimentação 
E preencher todos campos obrigatórios
E preencher os campos de data diferente do formato DD/MM/AAAA
E clicar em salvar
Então o sistema emite uma mensagem de erro

US4 – R3 - Criar movimentação com data futura
Dado que o usuário esteja logado 
Quando o usuário clicar no botão Criar Movimentação 
E preencher todos campos obrigatórios
E preencher os campos de data com data futura
E clicar em salvar 
Então o sistema emite uma mensagem de erro

US5 - Logout
Dado que o usuário esteja logado 
Quando clicar no botão Sair 
Então o sistema deverá retornar para a tela de login  

