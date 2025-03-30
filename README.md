# Projeto Criado com React, TypeScript e Tailwind CSS

Este projeto foi criado utilizando **React**, **TypeScript** e **Tailwind CSS**. Ele também inclui configurações para **testes unitários** utilizando **Vitest**, **React Testing Library** e cobertura de testes.

## Instalação

### 1. Clone o repositório

Clone este repositório para sua máquina local:

```bash
git clone <url-do-repositorio>
```

### 2. Instale as dependências

Dentro da pasta do projeto, execute o comando para instalar as dependências:

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

Para iniciar o servidor de desenvolvimento e ver a aplicação em funcionamento, use o seguinte comando:

```bash
npm run dev
```

Isso iniciará o servidor localmente, geralmente em `http://localhost:3000`.

## Testes

### 1. Estrutura dos Testes

Os arquivos de testes estão localizados no projeto sob o nome `index.spec.tsx`. Para validar os testes, basta acessar os arquivos correspondentes.

### 2. Rodando os Testes

Para rodar os testes unitários, use o seguinte comando no terminal:

```bash
npm run test
```

Isso executará os testes configurados no projeto.

### 3. Verificando a Cobertura dos Testes

Para ver a cobertura dos testes, utilize o comando:

```bash
npm run test:coverage
```

Esse comando gerará uma pasta chamada `coverage` dentro do seu projeto. Para visualizar a cobertura dos testes, siga as etapas abaixo:

1. Navegue até a pasta `coverage` gerada.
2. Abra o arquivo `index.html` dentro dessa pasta.
3. Use uma extensão como ex: **Live Server** para abrir o arquivo no navegador e visualizar a cobertura dos testes.

Isso permitirá que você veja o que foi testado e a cobertura dos testes no projeto.

## Dependências

Este projeto utiliza as seguintes dependências:

- **React** e **React-dom**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework CSS para construção rápida de designs responsivos.
- **Vitest**: Framework de testes unitários com suporte a cobertura.
- **React Testing Library**: Biblioteca para facilitar testes de componentes React.
- **ESLint**: Ferramenta de análise estática de código para garantir qualidade e consistência.
- **Prettier**: Ferramenta para formatação de código.
