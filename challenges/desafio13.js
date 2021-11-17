db.voos.find({ "aeroportoDestino.continente": 
{ $ne: ["EUROPA", "ÁSIA", "OCEANIA"] }, 
}).count();
