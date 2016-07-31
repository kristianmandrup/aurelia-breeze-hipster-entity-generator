import {inject} from 'aurelia-framework';
import {Lookups} from '../lookups';

@inject(Lookups)
export class <%= entityClass %>Details {
  <%= entityInstance %>;
  all<%= entityClassPlural %>;
  <%= entityInstance %>;
  productsIndex = {};
  detail = null;

  constructor(lookups) {
    this.<%= entityInstancePlural %> = this.all<%= entityClassPlural %> = lookups.<%= entityInstancePlural %>;

    // relationship.otherEntityName
    // this.<%= entityInstancePlural %>.forEach(p => this.<%= entityInstancePlural %>Index[p.ProductID] = p);
  }

  activate(<%= entityInstance %>) {
    this.<%= entityInstance %> = <%= entityInstance %>;
  }

  addDetail() {
    this.detail = this.<%= entityInstance %>.entityAspect.entityManager
      .createEntity('<%= entityClass %>Detail', { <%= entityClass %>ID: this.<%= entityInstance %>.<%= entityClass %>ID });
    this.openDetail();
  }

  editDetail(detail) {
    this.detail = detail;
    this.openDetail();
  }

  removeDetail(detail) {
    detail.entityAspect.setDeleted();
  }

  detailPropertyChanged(args) {
    // autofill UnitPrice based on selected Product
    // relationship.otherEntityName
    // if (args.propertyName !== '<%= otherEntity %>ID') {
    //   return;
    // }
    // var product = this.productsIndex[args.newValue];
    // this.detail.UnitPrice = product ? product.UnitPrice : null;
  }

  openDetail() {
    // subscribe to Product change to autofill UnitPrice
    this._subscription = this.detail.entityAspect.propertyChanged.subscribe(args => this.detailPropertyChanged(args));

    // TODO: for which relationships?
    // relationship.otherEntityName
    // // prevent selecting the same product twice.
    // this.products = this.allProducts
    //   .filter(p => this.<%= entityInstance %>.<%= entityClass %>Details.filter(d => d.ProductID === p.ProductID && d !== this.detail).length === 0);

    // open the modal.
    $('#detail').openModal();
  }

  closeDetail() {
    this.detail.entityAspect.propertyChanged.unsubscribe(this._subscription);
    $('#detail').closeModal();
  }

}
