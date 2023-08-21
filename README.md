# Projeto QuikDev - Teste Técnico consumo de FakeAPI

[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![linkedin](https://badgen.net/badge/icon/linkedin?icon=linkedins&label)](https://www.linkedin.com/in/igords-goncalves/)

[Repositório Relacionado](https://github.com/DiegoSilva94/FakeApiJs)

O projeto é destinado ao cumprimento do teste técnico para vaga de desenvolvedor frontend na empresa QuikDev.

## 🗨 Sobre o Projeto
Esse é um projeto feito em React com detalhes e cuidado quanto ao design, UI (Interface do Usuário) e UX (Experiência do Usuário). Trata-se de um ambiente autênticado onde se é possível, fazer posts de textos, editar e excluir esse post, acionar comentários referente ao post escolhido, editar e excluir esse comentário.

| 💙 | 👀  |
| -------- | -------- |
| ![Linha 2, Coluna 1](https://github.com/igords-goncalves/quikdev-posts/assets/79734585/7d195a58-c124-4410-8f53-d774d1af8040) | ![Linha 2, Coluna 2](https://github.com/igords-goncalves/quikdev-posts/assets/79734585/b2b6649b-385b-499e-877a-77e369bbac84) |
| ![Linha 3, Coluna 1](https://github.com/igords-goncalves/quikdev-posts/assets/79734585/7cf3a0bf-8862-4609-8fbe-1fe094374e20) | ![Linha 3, Coluna 2](https://github.com/igords-goncalves/quikdev-posts/assets/79734585/a25e4003-4632-41b3-a344-bf9cd63c9dbc) | 
| ![Linha 3, Coluna 1](https://github.com/igords-goncalves/quikdev-posts/assets/79734585/5b443972-a8fa-4d4d-af8e-a4b6e6e6393d) | ![Linha 3, Coluna 2](https://github.com/igords-goncalves/quikdev-posts/assets/79734585/ed35edb0-4c12-41ef-a78a-7b45eea31e76) |

## Recursos

- Criar Conta
- Realizar Login
- Adicionar Posts
- Editar Posts
- Excluir Posts
- Adicionar comentários ao post
- Excluir e editar comentários do post

## 💻 Como Instalar e Executar

Clone este repositório em sua máquina local.
````
git clone https://github.com/igords-goncalves/quikdev-posts.git
````
Execute o comando comando no terminal para instalar as dependências necessárias.
````
npm install
````
Execute o comando comando no terminal para iniciar o projeto.
````
npm run dev
````

## 🤝 Como Contribuir

Faça um fork deste repositório - [*Como criar um fork*](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

Crie uma nova branch com a sua contribuição
````
git checkout -b minha-contribuicao
````
Commit suas alterações
````
git commit -m "Descrição das suas alterações"
````
Faça um push para a sua branch
````
git push origin minha-contribuicao
````
Abra um pull request - [*Como abrir um pull request*](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)


## ⚙ Principais Tecnologias Utilizadas

Escolhi TypeScript devido à sua robustez, tipagem forte e capacidade de aproveitar recursos avançados. Isso oferece maior segurança e consistência ao código, especialmente ao trabalhar com tecnologias modernas como React e estilos Tailwind. As outras tecnologias desempenharam papéis complementares durante o processo de desenvolvimento.

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

Este teste técnico proporcionou uma experiência valiosa para meu crescimento pessoal e técnico. Estou à disposição para receber feedbacks de natureza técnica ou sugestões de aprimoramento para o projeto. Quero enfatizar minha total receptividade a qualquer tipo de retorno.

![banner-postagem](https://github.com/igords-goncalves/quikdev-posts/assets/79734585/5a98b9cb-96f1-45db-9e27-59b362421699)

## Licença
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
