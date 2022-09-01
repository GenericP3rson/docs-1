<<<<<<< HEAD
# Bucket Reference
=======
# Bucket Reference

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
>>>>>>> 4b4eb1940744c5d13ec391fcc29115534e045b40
