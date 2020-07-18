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

Ao rodar o comando para iniciar o ambiente de desenvolvimento, você terá a api disponível na url: http://localhost:8000/api/v1/.
Juntamente com isso você tem um ambiente de debug remoto rodando na porta "5678", podendo ser usado no Vscode.
