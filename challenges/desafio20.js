db.voos.findOne(
    { rtk: { $exists: false } },
     { vooId: 1 },
);
