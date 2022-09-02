---
title: Uploading Documents
displayed_sidebar: motorSidebar
---

Schema Documents store end-to-end encrypted user data on the Sonr network. You can think of this feature like a decentralized MongoDB. All Documents are stored on [IPFS](https://ipfs.io) and therefor have a CID which represent the content. You don't need to understand how IPFS works in order to use Sonr, just that CIDS are *content identifiers*. Later we'll go over how Documents can be stored in [Buckets](./buckets.md) for easier referencing and organization.

## Creating a Document

Documents can be created using the `DocumentBuilder` API. You simply need to provide the [DID](#) of the [Schema](#) this document will conform to. When you create an document without adding it to a bucket, you as the developer must take care to keep track of the CID.

```java
public void createDocument(String schemaDid) throws Exception {
    Motoroid mtr = Motoroid.getInstance();
    DocumentBuilder builder = mtr.createDocumentBuilder(schemaDid);

    builder.set("key", "value");
    // ... set other fields ...

    // validates and builds the document
    Document d = builder.build();

    // builds and uploads the document
    UploadObjectResponse result = builder.upload();

    // print the CID of the newly created object
    System.out.println(result.getReference().getCid());
}
```

## Fetching a Document

With a Document's CID, you can fetch an document directly from `Motoroid`.

```java
public void getDocument(String cid) {
    Motoroid mtr = Motoroid.getInstance();
    JSONObject d = mtr.getDocument(cid);
}
```

Without a *Schema*, documents are returned as JSON objects. You can provide a schema's DID to get a `Document` instance.

```java
public void getDocument(String cid, SchemaDefinition schema) {
    Motoroid mtr = Motoroid.getInstance();
    Document d = mtr.getDocument(cid, schema);
}
```

For details on how to get a `SchemaDefinition`, see [Schemas](./schemas.md).
