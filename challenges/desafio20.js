db.voos.findOne(
    { rtk: { $exists: false } },
     { _id: false, vooId: 1 },
);
