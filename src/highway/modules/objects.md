---
title: Overview
---

# Objects
Objects are data `blobs` persisted within an off chain storage network and given a content identifier, which repersents the object in the network, this objects is not kept on the `blockchain`. When uploading an object for storage, there must be validation against a [schema]() which must match in both property name, and type.


# Encoding.
Objects are stored in the network as a `DAG`, which are made up of a series of data related to one another by `links` which allow content to be resolved into its complete form. This is possible though type assurance given to objects through the `schemas`.

# Referencing
 It should be noted that once an object is stored. its `cid` must be associated with a [buckets]() to be retrievable. Buckets allow objects to be searched upon by schema, and meta-data. Currently only searching by a schema is supported, but indexing of buckets is expected soon.

 # Examples

See [Speedway]() Documentation for information on how to upload content through a managed Content enviorment or our `CLI`. 
See [Motor-SDK]() Documentation for how to interface with objects through its