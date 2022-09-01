---
title: Overview
---

# Buckets
Similar to Amazon S3 or DigitalOcean Spaces, developers can leverage our decentralized storage module for uploading either application specific assets or user specific assets. While we encourage developers to use our SDK for best results, this storage is S3-compliant.

The Sonr bucket module is used to record the defined collections of Objects utilized by an Application on the Sonr Network. A bucket can be either public access, private access, or restricted access based on Developer configuration. A bucket is used to help organize similar objects for a given application.

## Overview
A Bucket is represented by a document on chain called a `WhereIs`. This document is referenced by its `Creator` and `DID` which provided a unique identifier to the content store. Buckets reference content by `BucketItems` which hold content identifiers. These identifiers can point to either `did` Content stores can reference one another, which allow data so be subcategorized and referenced by many buckets.

### WhereIs defintion
As stated within the `overview`, a `WhereIs` document is the on chain reference to a Bucket. Which hold it's `DID`, `Creator` and `BucketItems`.
```
message WhereIs {
  // DID of the created bucket.
  string did = 1;

  // Creator of the new bucket
  string creator = 2;

  // Label of the new bucket.
  string label = 3;

  // Visibility of the new bucket.
  BucketVisibility visibility = 4;

  // Role of the creator of the new bucket.
  BucketRole role = 5;

  // IsActive flag of the new bucket.
  bool is_active = 6;

  // Content of the new bucket map of DIDs to CIDs.
  repeated BucketItem content = 7;

  // Timestamp of the new bucket.
  int64 timestamp = 9;
}
```

Each BucketItem can hold either a Bucket or an `Object`. A DID of a [Schema]() can also be associated with an object.
```
message BucketItem {
  // Name of the bucket item.
  string name = 1;

  // DID of the item. If applicable // optional
  string uri = 2;

  // Timestamp of the last update. // optional
  int64 timestamp = 3;

  // Type of the resource
  ResourceIdentifier type = 4;

  // References the schema and item within the bucket is associated with. Bucket items do not need to use the same schema reference
  // if the bucket is "generic" // optional
  string schema_did = 5;
}
```

# Querying
When querying bucket item which is an object, the following will be returned in a familar form based on the given platform / motor-sdk version:
```
message BucketContent {
  // Raw content serialized to bytes
  bytes item = 1;
  // Content id a CID, DID, or unspecified
  string id = 2;
  sonrio.sonr.bucket.ResourceIdentifier content_type = 3;
}
```

### Bucket Types

*   **App-specific bucket** -- a bucket created by the developer containing visual assets and other media germane to the App.

*   **User-specific bucket** -- a bucket contrived through user-created data, facilitated by an **Object** or **Channel**.

## Usage
> Blockchain Methods supplied by Channel Module. Full implementation is still a work in progress.

