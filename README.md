Projeto de Leitura e Inserção de Dados de XLSX com Prisma

Este projeto permite a leitura de arquivos XLSX (Excel) e a inserção de dados diretamente em um banco de dados usando o Prisma ORM. O backend é construído com Express.js e a biblioteca xlsx para processar arquivos Excel.

Funcionalidades

    Leitura de Arquivo XLSX:
        Através da rota GET /read-xlsx, o servidor lê o arquivo que o usuário colocar dentro da pasta do projeto e indentifique o mesmo no trecho ("const file = './users.xlsx';" = Aqui será onde você colocará a Rota da planilha desejada) e extrai as informações contidas na planilha "Sheet1".
        Os dados são retornados como uma resposta JSON.
Inserção de Dados no Banco de Dados:

    Através da rota POST /insert-xlsx, o servidor lê o arquivo XLSX e insere os dados na tabela index do banco de dados utilizando o Prisma.
    Os campos do arquivo XLSX são mapeados para as colunas correspondentes na tabela do banco de dados.


Exclusão de Dados do Banco de Dados:

    Através da rota DELETE /delete-xlsx, é possível excluir dados específicos da tabela index utilizando o id como identificador.

Requisitos

    Node.js
    Prisma ORM
    Banco de Dados configurado com Prisma
    Dependências:
        express
        xlsx
        @prisma/client


Como Usar
1. Clone o Repositório

Clone este repositório para o seu computador:

     git clone https://github.com/seu-usuario/Leitor--com-CRUD-de-arquivos-xlsx.git
     cd Leitor--com-CRUD-de-arquivos-xlsx
     
2. Instale as Dependências

       npm install

3. Configure o Banco de Dados

    Certifique-se de que você tenha o Prisma configurado corretamente e que o banco de dados esteja acessível.
 

   crie um arquivo .env na pasta raiz do projeto:

        DATABASE_URL="SeuBanco://usuario:senha@localhost:porta/NomeTabela"
   
   Execute o comando para migrar o banco de dados se necessário:

          npx prisma migrate dev
4. Execute o Servidor

Inicie o servidor:

    npm run start

(Caso já não haja outro serviço rodando, o servidor irá rodar na porta 3000.




5. Usando as Rotas

    Leitura do Arquivo XLSX: Faça uma requisição GET para /read-xlsx para visualizar os dados extraídos do arquivo XLSX.
   
    Inserção de Dados no Banco: Faça uma requisição POST para /insert-xlsx para inserir os dados do arquivo XLSX na tabela index do banco de dados.

    Exclusão de Dados: Faça uma requisição DELETE para /delete-xlsx passando o id no corpo da requisição para excluir um registro da tabela index.

Exemplo de requisição DELETE:
      
      {
        "id": 1
      }

As requisições realizadas ficam a disposição do usuário, eu particularmente prefiro utilizar o "Insomnia"
   
6. Estrutura do Banco de Dados

A tabela index no banco de dados tem a seguinte estrutura:

    id: Identificador único (inteiro)
    nome: Nome do usuário ou item
    equipamentos: Equipamentos associados
    valor_em_compras: Valor gasto em compras (float)


    
6. Considerações

    O projeto foi desenvolvido para ler dados de um arquivo XLSX com uma estrutura específica.
   
    Certifique-se de que o arquivo XLSX esteja formatado corretamente com os campos esperados (nome, equipamentos, valor em compras).
   
    O Prisma é utilizado para realizar operações de leitura, inserção e exclusão no banco de dados.
       





