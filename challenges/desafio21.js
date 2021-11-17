db.voos.findOne(
    { litrosCombustivel: { $gt: 1000 } },
     { vooId: 1 },
);
