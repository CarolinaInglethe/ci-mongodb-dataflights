db.voos.findOne(
    {
        $and: [
            { litroscombustivel: { $exists: true } },
            { litroscombustivel: { $not: { $gt: 6000 } } },
        ],
        $or: [
            { "empresa.nome": { $not: { $eq: "GOL" } } },
            { "empresa.nome": { $not: { $eq: "AZUL" } } },
        ],
    },
    {
      _id: false, vooId: 1, "empresa.nome": 1, litroscombustivel: 1,
    },
);