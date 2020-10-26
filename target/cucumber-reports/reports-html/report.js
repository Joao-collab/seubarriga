$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Nova Conta",
  "description": "",
  "id": "nova-conta",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Conta"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuário esteja logado",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "navegue ate a pagina de criar conta",
  "keyword": "E "
});
formatter.match({
  "location": "LogoutSteps.queOUsuárioEstejaLogado()"
});
formatter.result({
  "duration": 7602081800,
  "status": "passed"
});
formatter.match({
  "location": "ContaSteps.navegueAteAPaginaDeCriarConta()"
});
formatter.result({
  "duration": 717673800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Criar conta com sucesso",
  "description": "",
  "id": "nova-conta;criar-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@criarConta"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "preencher o campo nome",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar em salvar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema emite uma mensagem de sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "ContaSteps.preencherOCampoNome()"
});
formatter.result({
  "duration": 51284200,
  "status": "passed"
});
formatter.match({
  "location": "ContaSteps.clicarEmSalvar()"
});
formatter.result({
  "duration": 359426100,
  "status": "passed"
});
formatter.match({
  "location": "ContaSteps.oSistemaEmiteUmaMensagemDeSucesso()"
});
formatter.result({
  "duration": 636312300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuário esteja logado",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "navegue ate a pagina de criar conta",
  "keyword": "E "
});
formatter.match({
  "location": "LogoutSteps.queOUsuárioEstejaLogado()"
});
formatter.result({
  "duration": 6537479200,
  "status": "passed"
});
formatter.match({
  "location": "ContaSteps.navegueAteAPaginaDeCriarConta()"
});
formatter.result({
  "duration": 2370218000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Criar conta com nome ja cadastrado",
  "description": "",
  "id": "nova-conta;criar-conta-com-nome-ja-cadastrado",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@criarContaNomeJaCadastrado"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "preencha o campo nome com uma conta ja existente",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "clicar em salvar",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "o sistema emite uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "ContaSteps.preenchaOCampoNomeComUmaContaJaExistente()"
});
formatter.result({
  "duration": 48136100,
  "status": "passed"
});
formatter.match({
  "location": "ContaSteps.clicarEmSalvar()"
});
formatter.result({
  "duration": 310391300,
  "status": "passed"
});
formatter.match({
  "location": "ContaSteps.oSistemaEmiteUmaMensagemDeErro()"
});
formatter.result({
  "duration": 627393800,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Login com sucesso",
  "description": "",
  "id": "login;login-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@loginSucesso"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "digitar \u003cemail\u003e e \u003csenha\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "clicar no botao entrar",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "o sistema ira para a tela inicial",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;login-com-sucesso;",
  "rows": [
    {
      "cells": [
        "email",
        "senha"
      ],
      "line": 16,
      "id": "login;login-com-sucesso;;1"
    },
    {
      "cells": [
        "\"testejoao12@gmail.com\"",
        "\"xxx123\""
      ],
      "line": 17,
      "id": "login;login-com-sucesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.queOUsuarioEstejaNaTelaDeLogin()"
});
formatter.result({
  "duration": 6158012200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login com sucesso",
  "description": "",
  "id": "login;login-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    },
    {
      "line": 8,
      "name": "@loginSucesso"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "digitar \"testejoao12@gmail.com\" e \"xxx123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "clicar no botao entrar",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "o sistema ira para a tela inicial",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "testejoao12@gmail.com",
      "offset": 9
    },
    {
      "val": "xxx123",
      "offset": 35
    }
  ],
  "location": "LoginSteps.digitarE(String,String)"
});
formatter.result({
  "duration": 101556900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoEntrar()"
});
formatter.result({
  "duration": 628256300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.oSistemaIraParaATelaInicial()"
});
formatter.result({
  "duration": 5630447200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "cadastro de novo usuario",
  "description": "",
  "id": "login;cadastro-de-novo-usuario",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 19,
      "name": "@novoUsuario"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "clicar na opção Novo Usuário?",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "preencher \u003cnome\u003e \u003cemail\u003e \u003csenha\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "o sistema emitira uma mensagem de sucesso",
  "keyword": "Entao "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login;cadastro-de-novo-usuario;",
  "rows": [
    {
      "cells": [
        "nome",
        "email",
        "senha"
      ],
      "line": 26,
      "id": "login;cadastro-de-novo-usuario;;1"
    },
    {
      "cells": [
        "\"joao\"",
        "\"testejoao1234@gmail.com\"",
        "\"xxx123\""
      ],
      "line": 27,
      "id": "login;cadastro-de-novo-usuario;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.queOUsuarioEstejaNaTelaDeLogin()"
});
formatter.result({
  "duration": 5946893400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "cadastro de novo usuario",
  "description": "",
  "id": "login;cadastro-de-novo-usuario;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    },
    {
      "line": 19,
      "name": "@novoUsuario"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "clicar na opção Novo Usuário?",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "preencher \"joao\" \"testejoao1234@gmail.com\" \"xxx123\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "o sistema emitira uma mensagem de sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.clicarNaOpçãoNovoUsuário()"
});
formatter.result({
  "duration": 722307300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "joao",
      "offset": 11
    },
    {
      "val": "testejoao1234@gmail.com",
      "offset": 18
    },
    {
      "val": "xxx123",
      "offset": 44
    }
  ],
  "location": "LoginSteps.preencher(String,String,String)"
});
formatter.result({
  "duration": 726328000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.oSistemaEmitiraUmaMensagemDeSucesso()"
});
formatter.result({
  "duration": 622053200,
  "status": "passed"
});
formatter.uri("logout.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "logout",
  "description": "",
  "id": "logout",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@logout"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Login com",
  "description": "",
  "id": "logout;login-com",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 6,
  "name": "que o usuário esteja logado",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "clicar no botão Sair",
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "o sistema deverá retornar para a tela de login",
  "keyword": "Então "
});
formatter.match({
  "location": "LogoutSteps.queOUsuárioEstejaLogado()"
});
formatter.result({
  "duration": 6868397800,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSteps.clicarNoBotãoSair()"
});
formatter.result({
  "duration": 366238400,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSteps.oSistemaDeveráRetornarParaATelaDeLogin()"
});
formatter.result({
  "duration": 1030951200,
  "status": "passed"
});
formatter.uri("movimentacao.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Nova Conta",
  "description": "",
  "id": "nova-conta",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@movimentacao"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuário esteja logado",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "navegue ate a pagina de criar movimentacao",
  "keyword": "E "
});
formatter.match({
  "location": "LogoutSteps.queOUsuárioEstejaLogado()"
});
formatter.result({
  "duration": 7956770600,
  "status": "passed"
});
formatter.match({
  "location": "MovimentacaoSteps.navegueAteAPaginaDeCriarMovimentacao()"
});
formatter.result({
  "duration": 358284900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Criar movimentacao com sucesso",
  "description": "",
  "id": "nova-conta;criar-movimentacao-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@criarMovimentacao"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "preencher os dados da movimentacao",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar em salvar movimentacao",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema emitira mensagem de sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "MovimentacaoSteps.preencherOsDadosDaMovimentacao()"
});
formatter.result({
  "duration": 337709400,
  "status": "passed"
});
formatter.match({
  "location": "MovimentacaoSteps.clicarEmSalvarMovimentacao()"
});
formatter.result({
  "duration": 581025500,
  "status": "passed"
});
formatter.match({
  "location": "MovimentacaoSteps.oSistemaEmitiraMensagemDeSucesso()"
});
formatter.result({
  "duration": 608819900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuário esteja logado",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "navegue ate a pagina de criar movimentacao",
  "keyword": "E "
});
formatter.match({
  "location": "LogoutSteps.queOUsuárioEstejaLogado()"
});
formatter.result({
  "duration": 8326218400,
  "status": "passed"
});
formatter.match({
  "location": "MovimentacaoSteps.navegueAteAPaginaDeCriarMovimentacao()"
});
formatter.result({
  "duration": 425976900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Criar movimentacao campos obrigatorios nao preenchidos",
  "description": "",
  "id": "nova-conta;criar-movimentacao-campos-obrigatorios-nao-preenchidos",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@criarMovimentacaoCamposObrigatoriosNaoPreenchidos"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "não preencher todos campos obrigatorios",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "clicar em salvar movimentacao",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "o sistema emitira mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "MovimentacaoSteps.nãoPreencherTodosCamposObrigatorios()"
});
formatter.result({
  "duration": 296148800,
  "status": "passed"
});
formatter.match({
  "location": "MovimentacaoSteps.clicarEmSalvarMovimentacao()"
});
formatter.result({
  "duration": 342532900,
  "status": "passed"
});
formatter.match({
  "location": "MovimentacaoSteps.oSistemaEmitiraMensagemDeErro()"
});
formatter.result({
  "duration": 622280500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuário esteja logado",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "navegue ate a pagina de criar movimentacao",
  "keyword": "E "
});
formatter.match({
  "location": "LogoutSteps.queOUsuárioEstejaLogado()"
});
formatter.result({
  "duration": 7567218500,
  "status": "passed"
});
formatter.match({
  "location": "MovimentacaoSteps.navegueAteAPaginaDeCriarMovimentacao()"
});
formatter.result({
  "duration": 481620300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Criar movimentacao data invalida",
  "description": "",
  "id": "nova-conta;criar-movimentacao-data-invalida",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 21,
      "name": "@criarMovimentacaoDataInvalida"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "preencha os campos de data diferente do formato DD/MM/AAAA",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "clicar em salvar movimentacao",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "o sistema emite uma mensagem de data invalida",
  "keyword": "Entao "
});
formatter.match({
  "location": "MovimentacaoSteps.preenchaOsCamposDeDataDiferenteDoFormatoDDMMAAAA()"
});
formatter.result({
  "duration": 356926700,
  "status": "passed"
});
formatter.match({
  "location": "MovimentacaoSteps.clicarEmSalvarMovimentacao()"
});
formatter.result({
  "duration": 369971000,
  "status": "passed"
});
formatter.match({
  "location": "MovimentacaoSteps.oSistemaEmiteUmaMensagemDeDataInvalida()"
});
formatter.result({
  "duration": 1541646900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuário esteja logado",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "navegue ate a pagina de criar movimentacao",
  "keyword": "E "
});
formatter.match({
  "location": "LogoutSteps.queOUsuárioEstejaLogado()"
});
formatter.result({
  "duration": 6591429400,
  "status": "passed"
});
formatter.match({
  "location": "MovimentacaoSteps.navegueAteAPaginaDeCriarMovimentacao()"
});
formatter.result({
  "duration": 515866500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Criar movimentacao data futura",
  "description": "",
  "id": "nova-conta;criar-movimentacao-data-futura",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 27,
      "name": "@criarMovimentacaoDataFutura"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "preencha os campos de data com data futura",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "clicar em salvar movimentacao",
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "o sistema emite uma mensagem de data maior que a data atual",
  "keyword": "Entao "
});
formatter.match({
  "location": "MovimentacaoSteps.preenchaOsCamposDeDataComDataFutura()"
});
formatter.result({
  "duration": 337731200,
  "status": "passed"
});
formatter.match({
  "location": "MovimentacaoSteps.clicarEmSalvarMovimentacao()"
});
formatter.result({
  "duration": 390851100,
  "status": "passed"
});
formatter.match({
  "location": "MovimentacaoSteps.oSistemaEmiteUmaMensagemDeDataMaiorQueADataAtual()"
});
formatter.result({
  "duration": 608163200,
  "status": "passed"
});
});