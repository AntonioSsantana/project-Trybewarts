# Projeto Trybewarts

O Trybewarts é um projeto que envolve a criação de um formulário utilizando HTML, JavaScript e CSS. O objetivo deste projeto é simular um formulário de admissão na Escola de Magia e Bruxaria Trybewarts, onde os alunos podem se inscrever e fornecer informações pessoais.

## Funcionalidades

- O formulário possui campos para preenchimento de informações pessoais, como nome, email, telefone e endereço.
- O usuário pode selecionar uma casa de preferência entre as opções disponíveis.
- O formulário possui uma área para seleção de disciplinas opcionais.
- O usuário pode visualizar um resumo das informações inseridas antes de enviar o formulário.
- O formulário é validado para garantir que todos os campos obrigatórios sejam preenchidos corretamente.

## Instalação

1. Certifique-se de ter o Node.js instalado em seu computador.
2. Clone este repositório.
3. Acesse o diretório do projeto: `cd project-Trybewarts`
4. Instale as dependências do projeto: `npm install`

## Visualização

Para visualizar o projeto, deve-se utilizar a extensão Live Server no Visual Studio Code.

## Testes

O projeto utiliza o framework de testes Cypress para realizar testes automatizados. Os testes estão localizados no diretório `cypress/integration`.

Para executar os testes, utilize o seguinte comando:

```
npm test
```

## Configuração do ESLint e Stylelint

O projeto utiliza as configurações "airbnb-base" para o ESLint e "standard" para o Stylelint, que são configurações populares de estilo de código. Além disso, são utilizadas as configurações "trybe-fundamentals" do ESLint, que são configurações específicas da Trybe para projetos do módulo de fundamentos.

## Estrutura do Projeto

A estrutura de diretórios do projeto é a seguinte:

```
.
├── index.html            # Página HTML principal
├── script.js             # Arquivo JavaScript com a lógica do formulário
├── style.css             # Arquivo CSS com a estilização do formulário
├── cypress/              # Arquivos de teste com o framework Cypress
│   └── integration/
│       └── ...
├── .eslintrc.json        # Configuração do ESLint
├── .stylelintrc.json     # Configuração do Stylelint
├── package.json          # Dependências e scripts
└── README.md             # Documentação do projeto
```

## Contribuidores

- [Esdras Thiago](https://github.com/EsdrasThiago)