---
title: Using Schemas
displayed_sidebar: motorSidebar
---

# Schemas

Schemas are the data types of the Sonr, adding structure to data stored on the network. Schemas are ubiquitous, meaning you're not limited to using the Schemas you created. Check out [Speedway](#) for information on viewing schemas.

## Fetching Schemas

If you know a schema's DID, you have all you need to get it.

```java
public void getSchema(String schemaDid) throws Exception {
    QueryWhatIsResponse response = mtr.queryWhatIsByDid(schemaDid);
    SchemaDefinition schema = response.getSchema();

    // Print the fields of the schema
    System.out.println(schema.getFieldsList());
}
```

To create schemas, use the [Speedway CLI](#).
