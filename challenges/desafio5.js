db.voos.find({}, { _id: false, vooId: 1 }).skip(9).limit(3);

// irá pular 9 e contar com o 10, 11 e 12 