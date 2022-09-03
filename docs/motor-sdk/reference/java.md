---
title: Java
sidebar_position: 1
displayed_sidebar: motorSidebar
---

# `motoroid` API

This reference details each method available in the `Motoroid` class.

### Init

```java
public static Motoroid init(Context ctx);
```
Initializes the `Motoroid` singleton given an application context.

### Get Instance

```java
public static Motoroid getInstance();
```
Returns the singleton instance.

### Create Account
```java
public CreateAccountResponse createAccount(String password);
```
Creates an account given a password. Automatically generates a pre-shared key which is kept in Android's shared preferences.

### Login

```java
public LoginResponse login();
```
Uses the device's credentials to login. Password not required.

### Login with DID
```java
public LoginResponse login(String address);
```
Uses the device's credentials to login using the given account address.

### Login With DID and Password
```java
public LoginResponse login(String did, String password);
```

### Get Address

```java
public String getAddress();
```
Returns the address of the logged in account.

### Get WhatIs By Creator

```java
public QueryWhatIsByCreatorResponse queryWhatIsByCreator(String creator);
```
Returns a response including a list of [*WhatIs*](#) by the given creator.

### Get WhatIs By DID

```java
public QueryWhatIsResponse queryWhatIsByDid(String did);
```
Returns a response including the WhatIs for the given *DID*.

### Get Document

```java
public JSONObject getDocument(String cid);
```
Returns a `JSONObject` representation of the document referenced by the given *CID*.

### Get Document With Schema

```java
public Document getDocument(String cid, SchemaDefinition schema);
```
Returns a `Document` representation of the document referenced by the given *CID*.

### Create Document Builder

```java
public DocumentBuilder createDocumentBuilder(String schemaDid);
```
Creates a `DocumentBuilder` for the given *Schema DID*.

### Get Bucket

```java
public Bucket getBucket(String did);
```
Returns a `Bucket` instance for the given *DID*.

### Get Saved DID

```java
public String getSavedDid();
```
Returns the cached account DID on the device.

## Buckets API

This reference details each method available in the `Bucket` class.

### Constructor

```java
Bucket(Motoroid instance, String did);
```
Creates a new *Bucket* using the `Motoroid` singleton and a bucket's *DID*.

### Update Label

```java
public void updateLabel(String label);
```
Update the label of the bucket.

### Update Visibility
```java
public void updateVisibility(BucketVisibility visibility);
```
Update the visibility property of the bucket.

### Get Document
```java
public Document getDocument(String cid);
```
Get a bucket's *Document* by its *CID*.

### Get Documents
```java
public Document getDocuments();
```
Get a list of the bucket's *Document*s.

### Get Bucket
```java
public Bucket getBucket(String did);
```
Get a bucket's child *Bucket* by its *DID*.

### Get Sub Bucket DIDs
```java
public List<String> getSubBucketDids();
```
Get a list of DID's representing the buckets contained in the parent bucket.

### Add a Document
```java
public UploadObjectResponse addDocument(Document d);
```
Adds a document to the bucket. Returns an `UploadObjectResponse` containing the CID and other information.

### Remove a Document
```java
public void removeDocument(String cid);
```
Removes a document from the bucket.

# Documents API

This reference details each method available in the `DocumentBuilder` class.

### Constructor

```java
public DocumentBuilder(Motoroid mtr, String schemaDid)
```
Constructs a `DocumentBuilder` using the `Motoroid` instance and a *Schema DID*.


### Constructor (with data)

```java
public DocumentBuilder(Motoroid mtr, String schemaDid, Document d)
```
Constructs a `DocumentBuilder` using the `Motoroid` instance and a *Schema DID*, populating the fields with the given *Document*.

### Set Label

```java
public void setLabel(String label);
```
Sets the label for the *Document*.

### Set Field

```java
public void set(String fieldName, Object value);
```
An overloaded method which sets the value of the given field.

### Add List Element

```java
public void add(String fieldName, Object value);
```
An overloaded method which adds the value of the given list field.

### Remove Field

```java
public void remove(String fieldName);
```
Remove the value for the given field.

### Remove List Field Element

```java
public void remove(String fieldName, int index);
```
Remove the value from the given list field at the given index.

### Build

```java
public Document build();
```
Validates and returns the *Document* for the populated fields.

### Upload

```java
public UploadObjectResponse upload();
```
Validates and uploads the *Document* for the populated fields. Returns the result which includes the *CID* and other information.
