db.voos.findOnde(
    { litrosCombustivel: { $exists: true } },
     { vooId: 1 },
);
