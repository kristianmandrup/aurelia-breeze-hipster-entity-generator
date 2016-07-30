import breeze from 'breeze';
import settings from '../settings';
import {createEntityManager} from '../entity-manager-factory';

export class OrderService {
  getPage(pageIndex) {
    var query = new breeze.EntityQuery
      .from('Orders')
      .select('OrderID, Customer.CompanyName, Employee.FirstName, Employee.LastName, OrderDate, Freight')
      .orderByDesc('OrderDate')
      .skip(pageIndex * settings.pageSize)
      .take(settings.pageSize)
      .inlineCount();

    return createEntityManager()
      .then(em => em.executeQuery(query))
      .then(queryResult => {
        return {
          entities: queryResult.results,
          pageCount: 8, //Math.ceil(queryResult.inlineCount / this.pageSize);
        };
      });
  }

  loadExisting(id) {
    var orderQuery = new breeze.EntityQuery().from('Orders').where('OrderID', '==', id),
        detailQuery = new breeze.EntityQuery().from('OrderDetails').where('OrderID', '==', id);

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
          entity: em.createEntity('Order'),
          entityManager: em
        };
      });
  }
}
