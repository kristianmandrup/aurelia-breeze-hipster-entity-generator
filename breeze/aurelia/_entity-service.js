import breeze from 'breeze';
import settings from '../settings';
import {createEntityManager} from '../entity-manager-factory';

export default class <%= entityClass %>Service {
  getPage(pageIndex) {
    var query = new breeze.EntityQuery
      .from('<%= entityTableName %> ')
      .select(
      <%= fields.map(field => field.name).join(',') %>
      <%= relationships.map(rel => rel.name).join(',') %>
      )
      .orderByDesc(<%= orderByField %>)
      .skip(pageIndex * settings.pageSize)
      .take(settings.pageSize)
      .inlineCount();

    return createEntityManager()
      .then(em => em.executeQuery(query))
      .then(queryResult => {
        return {
          entities: queryResult.results,
          pageCount: 8, // Math.ceil(queryResult.inlineCount / this.pageSize);
        };
      });
  }

  loadExisting(id) {
    var orderQuery = new breeze.EntityQuery().from('<%= entityTableName %>').where('<%= entityPrimaryKey %> ', '==', id),
        detailQuery = new breeze.EntityQuery().from('<%= entityDetailsTableName %>').where('<%= entityPrimaryKey %>', '==', id);

    return createEntityManager()
      .then(em => Promise.all([em.executeQuery(orderQuery), em.executeQuery(detailQuery)]))
      .then(values => {
        var queryResult = values[0];
        return {
          entity: queryResult.results[0],
          entityManager: queryResult.entityManager
        };
      });
  }

  createNew() {
    return createEntityManager()
      .then(em => {
        return {
          entity: em.createEntity('<%= entityTableName %>'),
          entityManager: em
        };
      });
  }
}
