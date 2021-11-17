db.voos.findOne(
    {
        $and: [
            { litrosCombustivel: { $exists: true } },
            { litrosCombustivel: { $not: { $gt: 1000 } } },
        ], 
    },
    {
        _id: false, vooId: 1, litrosCombustivel: 1,
    },
);