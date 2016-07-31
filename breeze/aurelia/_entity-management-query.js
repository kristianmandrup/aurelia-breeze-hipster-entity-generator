const <%= entityIntancePlural %>Query = new breeze.EntityQuery
  .from('<%= entityTableName %>')
  .select('<%= fields.map(field => field.name).join(",") %>')
  .orderBy('<%= entityOrderField %>');
