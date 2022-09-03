---
title: REST Routes
displayed_sidebar: speedwaySidebar
---
## Summary

The Speedway API is a RESTful API that allows you to interact with the Speedway UI. The API is used to create, update, and delete Speedway resources such as **Schemas**, **Objects**, and **Buckets**. The API is also used in tandem with the Speedway UI allowing developers to create or view data on the Sonr blockchain, in a web application.

## Access API Reference
Currently the Speedway API reference is hosted on the Speedway API server. To access the API reference, you must first login to the Speedway UI. Once you are logged in, you can access the API reference by clicking the "Access API" button in the top right corner of the UI.

| Module | Route | HTTP Method |
| -------- | -------- | -------- |
| **Registry**  | `/api/v1/account/create` | POST |
| **Registry**  | `/api/v1/account/login` | POST |
| **Registry**  | `/api/v1/account/info` | GET |
| **Schema** | `/api/v1/schema/create` | POST |
| **Schema** | `/api/v1/schema/get` | POST |
| **Schema** | `/proxy/schema` | GET |
| **Objects** | `/api/v1/object/build` | POST |
| **Objects** | `/api/v1/object/get` | POST |
| **Buckets** | `/api/v1/bucket/create` | POST |
| **Buckets** | `/api/v1/bucket/update-items` | POST |
| **Buckets** | `/api/v1/bucket/update-label` | POST |
| **Buckets** | `/api/v1/bucket/update-visibility` | POST |
| **Buckets** | `/api/v1/bucket/get` | POST |
| **Buckets** | `/proxy/buckets` | GET |
| **Buckets** | `/api/v1/bucket/get-from-schema` | POST |
