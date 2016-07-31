import {createEntityManager} from './entity-manager-factory';
import lookupQueries from './queries';

/**
* Manages the application's shared lookups.
* Eagerly loading the lookups because there are only two.
*/
export class Lookups {  
  get queries() {
    let res = [];
    lookupQueries.forEach(query => {
      res[query.name] =em.executeQuery(query) 
    });
    return res;
  }

  load() {
    let queries = this.queries;
    return createEntityManager()
      .then(em => Promise.all(queries.values))
      .then(queryResults => {
        for (let res, index of queryResults) {
          let key = queries[index];
          this.results = this.results || {};
          this.results[key] = queryResults[index].results;
        }        
      })
  }
}
