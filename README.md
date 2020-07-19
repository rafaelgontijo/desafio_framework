# Framework

Desafio Técnico do processo seletivo da Framework

## Pré-requisitos

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Desenvolvimento

Iniciar o ambiente de desenvolvimento:
:
```bash
make up
```

Rodar os testes
```bash
make test
```

Rode o comando, para ver as outras opções do comando "make":
```bash
make help
```

### Ambiente de desenvolvimento

Ao rodar o comando para iniciar o ambiente de desenvolvimento, você terá disponível:
 - Uma api na url: http://localhost:8000/api/v1/
 - Uma documentação da api na url: http://localhost:8000/doc/
 - Uma app frontend consumindo da api na url: http://localhost/

#### Dados de acesso

Ao iniciar a aplicação são criados todos usuários que estão nesta url: https://jsonplaceholder.typicode.com/users, sendo o login o email e a senha 12345
