/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

module.exports = require('./lib/express');
const express = require('express');
const app = express();
const port = 3000;

// Rota GET padrão
app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu aplicativo Express!');
});

// Inicie o servidor na porta especificada
app.listen(port, () => {
  console.log(`Aplicativo Express ouvindo na porta ${port}`);
});
