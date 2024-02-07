# API QuizMaster

Esta é uma API para criar e gerenciar perguntas e respostas de um quiz.

## Funcionalidades

- Obter todas as perguntas
- Criar uma nova pergunta
- Obter um número específico de perguntas aleatórias
- Validar uma resposta fornecida pelo usuário

## Rotas Disponíveis

- **GET /AllQuestion:** Obtém todas as perguntas cadastradas.Requer autenticação com uma chave de API válida.
- **POST /CreateQuestion:** Cria uma nova pergunta. Requer autenticação com uma chave de API válida.
- **GET /Question:** Obtém um número específico de perguntas aleatórias. O número padrão de perguntas é 10, mas pode ser alterado através do parâmetro de consulta `limit`.
- **POST /ValidateAnswer:** Valida a resposta fornecida pelo usuário para uma pergunta específica. 

## Teste rotas usando POSTMAN

![POSTMAN](./public/Captura%20de%20tela%202024-02-07%20155834.png)


## Autor

- **Thiago Alves**

## Versão

1.0.0

## Instalação

1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.
2. Clone este repositório.
3. Execute `npm install` para instalar as dependências.
4. Configure as variáveis de ambiente, incluindo a chave de API necessária.
5. Execute `npm start` para iniciar o servidor.

