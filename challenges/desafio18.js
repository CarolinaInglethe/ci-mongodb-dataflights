db.voos.findOne(
    { "passageiros.pagos": { $gt: 7000 } }, 
    { _id: false, vooId: 1, mes: 1, ano: 1 },
);