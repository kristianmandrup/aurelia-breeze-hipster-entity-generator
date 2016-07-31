'use strict';

import {EntityViewModel} from '../entity-view-model';
import {inject} from 'aurelia-framework';
import {OrderService} from './<%= entityClientName %>-service';
import {Lookups} from '../lookups';

@inject(<%= entityClassName %>Service, Lookups)
export class <%= entityClassName %> extends EntityViewModel {
  refs = {};

  constructor(service, lookups) {
    super(service);

    for (let name of lookups.keys) {
        this.refs[name] = lookups.value[name];
    }    
  }

  get title() {
    if (this.entity.<%= entityPrimaryKeyName %> <= 0) {
      return 'New Order';
    }
    return `Order #${this.entity.<%= entityPrimaryKeyName %>}`;
  }
}


