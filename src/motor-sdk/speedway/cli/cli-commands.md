---
title: CLI Commands
---
# Speedway CLI Commands
## Accounts
Account commands are based on Sonr's Registry module. The registry module is used to create an account and login to an account on the Sonr Network. 
### Create a new Account
```bash
speedway account create
```
On creation of your account, you will be prompted to provide a password. this password will then be used as a `secret` for verifying keys related to your account. For more information see [registry](./../../../modules/registry.md)
### Login to an Account
```bash
speedway account login
```
Logging in through the cli utilizes your OS keyring. once prompted you can `Always` allow the cli access.
## Schema
Schema commands are based on Sonr's Schema module. The schema module is used to create, update, deprecate and query schemas on the Sonr Network.
### Create a new Schema
```bash
speedway schema create
```

### get a Schema
Schemas can be retrieved by providing a `DID` if not provided as an argument the cli will prompt for it.
```bash
speedway schema get [did]
```

### get all Schemas
Schemas can be retrieved in bulk by using `get all` which resolves all schemas for your account.
```
speedway schema get all
```

## Object
Object commands are based on Sonr's Object module. The objects module is used to build and querying objects on the Sonr Network.
### Build a new Object
```bash
speedway object build [did] [label] [file]
```
`did` - The did of the schema for the object
`label` - The label to associate with the object
`file` - a `JSON` definition of the object (should match types outlined in the `schema`)

### Get an Object
Objects can be resolved by their cid, if no cid is provided the cli will prompt for it.
```bash
speedway object get [cid]
```
Returns an `Object`

## Buckets
Bucket commands are based on Sonr's Bucket module. The buckets module is used to create, update, deprecate and get buckets on the Sonr Network.
### Create a new Bucket
```bash
speedway bucket create
```

### Get a Bucket
```bash
speedway bucket get [did]
```
`get` takes a single argument the `did` of the bucket to return

### Get a list of all Buckets
```bash
speedway bucket get all
```
Returns all buckets associated with the user