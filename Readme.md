# JHipster Entity generator for Aurelia with Breeze

JHipster currently only really supports Angular 1.x. Efforts are underway to support Angular 2.
I personally don't like Angular 2, so I try here to provide alternative options!

## Angular 1.x architecture overview

In Angular 1.x, states are managed via the REST [$resource](https://docs.angularjs.org/api/ngResource/service/$resource) provider. 

## Aurelia architecture

Aurelia uses a ViewModel as a combined kind of Model and Controller. You can keep your model either inside the ViewModel 
or have it managed externally, such as by Breeze etc.

We will use [Breeze.js](breezejs.com) as our state manager! This removes a lot of complexity from the Entity models and provides
a more powerful architecture with offline/caching, managed paging etc! 

We can see from northwind DB example how to hook Breeze up into a REST API like Jhipster ;)

## Angular 1 -> Aurelia

It looks quite simple to transition from Angular 1 to Aurelia since Aurelia has not come up with a crazy new template syntax like Angular 2,
but sticks to the HTML/XML guidelines.

See [angular-1-x-concepts-in-aurelia](http://ilikekillnerds.com/2015/10/angular-1-x-concepts-in-aurelia/)

- `ng-click` -> `click.bind`
- `ng-change` -> `change.bind`
- `ng-model` -> `value.two-way`
- `ng-src` -> `src.bind` 
- `ng-if` -> `if.bind`

Also see [working-with-forms-in-aurelia](http://ilikekillnerds.com/2015/10/working-with-forms-in-aurelia/) for more on Aurelia forms!

### Generator

Currently the generator uses Yeoman. We (most likely) need to stick with this (for now) in order to interoperate with the rest
of the Jhipster generators. See `index.js` and `prompts` in `breeze/` folder.

A few variable names have been changed (no longer any Angular references!). 

### Inspiration

We have used the [aurelia-breeze-northwind](https://github.com/jdanyow/aurelia-breeze-northwind) demo as an example, specifically
the `Orders` model.

### Entity templates

The Aurelia Breeze Entity templates can be found in `breeze/aurelia` folder. 
It should mimic the structure and implementation of the `breeze/orders` folder while using the templates of the Angular entity templates.

The main breeze folder contain the `.js` files common to all entities. These should be part of the app generator.
See [jhipster-aurelia boilerplate project](https://github.com/kristianmandrup/jhipster-aurelia-boilerplate) 

### Template variables 

See `loadInMemoryData` in `index.js` (generator) for the full list of variables available in Templates.
Here is an (incomplete) list...

```js
entityClass
entityClassHumanized
entityClassPlural
entityClassPluralHumanized
entityInstance
entityInstancePlural
entityApiUrl
entityFolderName
entityFileName
entityPluralFileName
entityServiceFileName
entityClientName
entityStateName
entityUrl
entityTranslationKey
entityTranslationKeyMenu

fieldsContainZonedDateTime = false;
fieldsContainLocalDate = false;
fieldsContainBigDecimal = false;
fieldsContainBlob = false;
validation = false;
fieldsContainOwnerManyToMany = false;
fieldsContainNoOwnerOneToOne = false;
fieldsContainOwnerOneToOne = false;
fieldsContainOneToMany = false;
fieldsContainManyToOne = false;
differentTypes = [entityClass];
if (!relationships) {
    relationships = [];
}
```            

Some usage examples

```
for (idx in fields)

fields[idx].enumInstance

if (fieldsContainOwnerOneToOne) 
if (fieldsContainBlob) 

for (idx in differentTypes)

fieldsContainZonedDateTime || fieldsContainLocalDate

for (idx in relationships)


if (relationships[idx].relationshipType == 'one-to-one' && 
relationships[idx].ownerSide == true && 
relationships[idx].otherEntityName != 'user') {

relationships[idx].relationshipFieldNamePlural.toLowerCase()
relationships[idx].otherEntityNameCapitalized 
relationships[idx].otherEntityRelationshipName.toLowerCase()
relationships[idx].relationshipFieldNamePlural.toLowerCase()

relationships[idx].relationshipFieldName 
relationships[idx].otherEntityNameCapitalized
relationships[idx].otherEntityNameCapitalized

```