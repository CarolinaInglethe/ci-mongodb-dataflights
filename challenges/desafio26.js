db.voos.deleteMany(
    {
      $and: [
          { "empresa.nome": "GOL" },
          { "passageiros.pagos": { $in: [5, 10] } },
      ],
    },
);