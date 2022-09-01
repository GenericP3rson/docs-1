# Motoroid Reference

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
Creates an account given a password. Automatically generates a preshared key which is kept in Android's shared preferences.

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
