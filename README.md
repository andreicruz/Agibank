Passos para rodar o teste:
1. Instalar o docker (https://www.docker.com/)
2. Rodar os seguintes comandos:
```
docker pull andreicruz/agibank-test

docker run -p 3000:3000 andreicruz/agibank-test
```
3. Acessar o linkÇ http://localhost:3000/

Bibliotecas utilizadas:
- Bootstrap para framework de css.
- Ky http request: https://github.com/sindresorhus/ky
