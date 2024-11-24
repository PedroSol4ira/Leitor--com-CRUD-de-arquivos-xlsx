const xlsx = require('xlsx');
const file = './users.xlsx';
const express = require("express");
const { PrismaClient } = require('@prisma/client');
const app = express();
const port = 3000;

const prisma = new PrismaClient();

// esta linha de codigo serve para o que o (req.body) seja reconhecido de forma eficiente
app.use(express.json())

app.get('/read-xlsx', async (req, res) => {
    try {
        const wb = xlsx.readFile(file);
        const ws = wb.Sheets["Sheet1"];
        const data = xlsx.utils.sheet_to_json(ws)


        const getXlsx = await prisma.index.findMany({
            select: {
                id: true,
                nome: true,
                equipamentos: true,
                valor_em_compras: true
            }
        })
        res.status(200).json({ message: 'Dados: ', getXlsx });
    } catch (error) {
        res.status(500).json({ message: "Não foi possivel puxar as informações ", error })
    }
});

app.post('/insert-xlsx', async (req, res) => {
    try {
        const wb = xlsx.readFile(file);
        const ws = wb.Sheets["Sheet1"];
        const data = xlsx.utils.sheet_to_json(ws);

        //Promise.all serve para processar mais de um dado de uma vez só
        const postData = await Promise.all(
            data.map(async (proximo) => {


                return prisma.index.create({
                    data: {
                        nome: proximo.nome,
                        equipamentos: proximo.equipamentos,
                        valor_em_compras: parseFloat(proximo["valor em compras"]) // Certifique-se de que é um número
                    },
                });
            })

        );

        res.status(200).send({ message: "Dados enviados com sucesso", postData });
    } catch (error) {
        console.error("Erro ao enviar a requisição:", error);
        res.status(500).send({ message: "Erro ao enviar a requisição!", error });
    }
});

app.delete('/delete-xlsx', async (req, res) => {
    try {

        const { id } = req.body;

        const deleteResult = await prisma.index.deleteMany({
            where: { id: id },
        });

        console.log("Resultado: ", deleteResult)
        res.status(200).json({ message: "Tabela excluida com sucesso!", deleteResult })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "houve um erro interno", error })
    }

})

app.listen(port, () => {
    console.log("");
});
