---
title: Registry
displayed_sidebar: highwaySidebar
---
# Registry
The Sonr registry module is used to store the records of user accounts and applications. Each record contains a DIDDocument and additional WebAuthn credential information.

## Overview

The record type utilized in the **Registry module** is the `WhoIs` type. This type provides both an interface to utilize WebAuthn credentials and a means to access the record's DIDDocument.

## Status Codes

```tex
200 - SUCCESS
300 - MULTIPLE CHOICE
304 - NOT MODIFIED
400 - BAD REQUEST
401 - NOT AUTHORIZED
```


