# Updating Buckets

New documents can be added or removed from a bucket using the Bucket class. This does not delete the document (data cannot be completely deleted from Sonr).

## Add a Document

Adding a document both uploads the document to IPFS and adds a reference to the bucket. The result of the upload is returned containing the CID and other information.

```java
public void addDocumentToBucket(String bucketDid, Document d) throws Exception {
    Motoroid mtr = Motoroid.getInstance();
    Bucket bucket = mtr.getBucket(bucketDid);

    UploadObjectResponse response = bucket.addDocument(d);

    // print the CID
    System.out.println(response.getReference().getCid());
}
```

Using the returned CID, you can remove the Document from the Bucket.

```java
public void removeDocumentFromBucket(String bucketDid, String cid) throws Exception {
    Motoroid mtr = Motoroid.getInstance();
    Bucket bucket = mtr.getBucket(bucketDid);

    bucket.removeDocument(cid);
}
```
