# Buckets

Buckets on Sonr are a great way to store related Documents—think of them like folders. They contain Document references as well as other buckets.

Like everything on Sonr, you need a bucket's DID in order to fetch it.

```java
public void getBucket(String did) throws Exception {
    Motoroid mtr = Motoroid.getInstance();
    Bucket bucket = mtr.getBucket(did);

    // iterate over all documents
    for (Document d : bucket.getDocuments()) {
      // print the 'fieldName' property from the Document
      System.out.println(d.get("fieldName"));
    }

    // get a single document with its CID
    Document d = bucket.getDocument("<CID>");
}
```

In addition to documents, you can also fetch child buckets.

```java
public void getSubBucket(String did) throws Exception {
    Motoroid mtr = Motoroid.getInstance();
    Bucket bucket = mtr.getBucket(did);

    // iterate over all sub bucket DIDs
    for (String subBucketDid : bucket.getSubBucketDids()) {
      // Resolve the subbucket. This bucket behaves exactly like the parent it came from
      Bucket subBucket = bucket.getBucket(subBucketDid);
    }

    // get a single document with its CID
    Document d = bucket.getDocument("<CID>");
}
```

Like schemas, buckets must be created via the [Speedway CLI](#).