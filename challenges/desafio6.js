db.voos.find(
    { vooId: 756807 }, 
    { _id: false, 
      "empresa.sigla": 1,
      "empresa.nome": 1, 
      passageiros: 1 },
);
