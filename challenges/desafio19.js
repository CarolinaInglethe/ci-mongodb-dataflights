db.voos.findOne(
    { litrosCombustivel: { $exists: true } },
     { vooId: 1 },
);
