db.voos.find(
    { "empresa.nome": "GOL", ano: 2017 }, 
      { 
        _id: false,
        vooId: 1, 
        "empresa.nome": 1, 
        "aeroportoOrigem.nome": 1, 
        "aeroportoDestino.nome": 1, 
        mes: 1, 
        ano: 1, 
      },
).limit(10);