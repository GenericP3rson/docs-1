# Document Builder Reference

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