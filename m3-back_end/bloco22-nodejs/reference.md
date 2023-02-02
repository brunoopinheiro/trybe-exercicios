# Iniciando o servidor de uma API Rest

## Instalando dependências

### Pré Configurações
```
npm init -y

npm i express@4.17.1 --save-exact

npm i eslint@6.8.0 eslint-config-trybe-backend@1.0.1 -D --save-exact

npm i nodemon@2.0.15 --D --save-exact

touch .eslintignore .eslintrc.json
```

Agora no `.eslintignore` adicionar:
```
node_modules
```

E no `.eslintrc.json` adicionar:
```
{
  "env": {
    "es2020": true
  },
  "extends": "trybe-backend",
  "rules": {
    "sonarjs/no-duplicate-string": ["error", 5]
  }
}
```

Se necessário, inicializar repositório git.

No `package.json`, adicionar os seguintes `scripts`:
```
"start": "node src/server.js",
"dev": "nodemon src/server.js",
"lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json ."
```