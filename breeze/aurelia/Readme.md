# Aurelia-Breeze Entity generator

Perhaps use [aurelia-dialog](https://github.com/aurelia/dialog) for dialog

Aurelia uses ViewModel as combined Model and Controller.

In Angular, states are managed via the REST [$resource](https://docs.angularjs.org/api/ngResource/service/$resource) provider 
We can see from northwind DB example how to hook Breeze up into a REST API like Jhipster ;)
Will be vastly simplified, since mostly Breeze will take care of field updates, relationships etc!!!

We should instead use Breeze.js as our state manager! Much better and simpler :)

## Variables availables in entity templates

- `entityInstance`
- `entityStateName`
- `entityUrl`
- `angularAppName`
- `entityTranslationKey`
- `entityFolderName`
- `entityPluralFileName`
- `entityAngularJSName`
- `keyPrefix`
- `entityClassHumanized`
- `entityClass`
- ...


## Fields

See the `.html` files. Looks like there is a `fields` array available! 

- `differentTypes[idx]`
- `fields` (Array og field definition Objects)

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