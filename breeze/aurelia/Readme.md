# Aurelia-Breeze Entity generator

Perhaps use [aurelia-dialog](https://github.com/aurelia/dialog) for dialog

Aurelia uses ViewModel as combined Model and Controller.

In Angular, states are managed via the REST [$resource](https://docs.angularjs.org/api/ngResource/service/$resource) provider 
We can see from northwind DB example how to hook Breeze up into a REST API like Jhipster ;)
Will be vastly simplified, since mostly Breeze will take care of field updates, relationships etc!!!

We should instead use Breeze.js as our state manager! Much better and simpler :)

## Angular 1 -> Aurelia

See [angular-1-x-concepts-in-aurelia](http://ilikekillnerds.com/2015/10/angular-1-x-concepts-in-aurelia/)

- `ng-click` -> `click.bind`
- `ng-change` -> `change.bind`
- `ng-model` -> `value.two-way`
- `ng-src` -> `src.bind` 
- `ng-if` -> `if.bind`

Also see [working-with-forms-in-aurelia](http://ilikekillnerds.com/2015/10/working-with-forms-in-aurelia/) for more on Aurelia forms!

## Variables availables in entity templates

- `entityInstance`
- `entityStateName`
- `entityUrl`
- `clientAppName`
- `entityTranslationKey`
- `entityFolderName`
- `entityPluralFileName`
- `entityClientName`
- `keyPrefix`
- `entityClassHumanized`
- `entityClass`
- ...

See `loadInMemoryData` in `index.js` (generator) for the full list of variables available in Templates.

## Fields

See the `.html` files. Looks like there is a `fields` array available! 

- `differentTypes[idx]`
- `fields` (Array og field definition Objects)

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