# Node.js-NPM-Express

1. **Modo Estrito:**
   ```javascript
   'use strict';
   ```
   - Esta linha ativa o "modo estrito" do JavaScript. O modo estrito é uma forma de escrever código mais seguro e robusto, aplicando regras mais rigorosas.

2. **Exportação do Módulo Express:**
   ```javascript
   module.exports = require('./lib/express');
   ```
   - Exporta o módulo `express` para ser utilizado em outros arquivos. Isso significa que outros arquivos podem importar este módulo.

3. **Importação do Módulo Express:**
   ```javascript
   const express = require('express');
   ```
   - Importa o módulo `express`. Agora, a variável `express` contém toda a funcionalidade do framework.

4. **Criação da Instância do Aplicativo:**
   ```javascript
   const app = express();
   ```
   - Cria uma instância do aplicativo Express. Esta instância será usada para configurar rotas e iniciar o servidor.

5. **Definição da Porta:**
   ```javascript
   const port = 3000;
   ```
   - Define a porta em que o servidor irá rodar. Neste caso, está configurada para a porta 3000.

6. **Configuração da Rota Padrão:**
   ```javascript
   app.get('/', (req, res) => {
     res.send('Bem-vindo ao meu aplicativo Express!');
   });
   ```
   - Define uma rota HTTP GET para a raiz (`/`) do aplicativo.
   - Quando alguém acessa a raiz, a função de callback é chamada, que responde com o texto "Bem-vindo ao meu aplicativo Express!".

7. **Iniciação do Servidor:**
   ```javascript
   app.listen(port, () => {
     console.log(`Aplicativo Express ouvindo na porta ${port}`);
   });
   ```
   - Inicia o servidor na porta especificada (no caso, 3000).
   - Quando o servidor é iniciado, a função de callback é chamada, que imprime uma mensagem no console indicando que o aplicativo está ouvindo na porta especificada.

Este código configura um aplicativo Express básico que responde com uma mensagem de boas-vindas quando acessado na raiz e inicia um servidor na porta 3000.
