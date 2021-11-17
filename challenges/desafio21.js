db.voos.findOne(
    { litrosCombustivel: { $gt: 1000 } },
     { _id: false, vooId: 1 },
);
