---
title: Overview
---

# Objects
Objects are data `blobs` persisted within an off chain storage network and given a content identifier, which represents the object in the network, this objects is not kept on the `blockchain`. When uploading an object for storage, there must be validation against a [schema](./schemas.md) which must match in both property name, and type.


# Encoding.
Objects are stored in the network as a `DAG`, which are made up of a series of data related to one another by `links` which allow content to be resolved into its complete form. This is possible though type assurance given to objects through the `schemas`.

# Referencing
 It should be noted that once an object is stored. its `cid` must be associated with a [bucket](./buckets.md) to be retrievable. Buckets allow objects to be searched upon by schema, and meta-data. Currently(9/1/2022), only searching by a schema is supported, but indexing of buckets is expected soon.


# Defining Objects
Objects are represented as `JSON`. Which makes it simple to define objects quickly. Support for JSON is found within most modern IDE and Code editors. Here we have an object that is for a Social Media app.
```json
{
    "from": "snr1d8cjuwkssr9uzf8zllkmmn0ekv6p7a7yuz2dpc",
    "payload": "lorem ipsum",
    "timestamp": 1662057089,
    "to": ["snr1d8cjuwkssr9uzf8zllkmmn0ekv6p7a7yuz2dpd", "snr1d8cjuwkssr9uzf8zllkmmn0ekv6p7a7yuz2dpd"],
    "active": true

}
```

 # Examples
See [Speedway]() Documentation for information on how to upload content through a managed Content environment or our `CLI`. 
See [Motor-SDK](../../motor-sdk/overview.md) Documentation for how to interface with objects through there for framework for creating Objects.