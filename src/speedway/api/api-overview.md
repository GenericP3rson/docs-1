---
title: API Overview
---
# Speedway API Overview

The Speedway API is a RESTful API that allows you to interact with the Speedway UI. The API is used to create, update, and delete Speedway resources such as schemas, objects, and buckets. The API is also used in tandem with the Speedway UI allowing developers to create or view data on the Sonr blockchain, in a web application.

## API Routes
| Module | Route | HTTP Method |
| -------- | -------- | -------- |
| Registry  | /api/v1/account/create | POST |
| Registry  | /api/v1/account/login | POST |
| Registry  | /api/v1/account/info | GET |
| Schema | /api/v1/schema/create | POST |
| Schema | /api/v1/schema/get | POST | 
| Schema | /proxy/schema | GET |
| Objects | /api/v1/object/build | POST |
| Objects | /api/v1/object/get | POST |
| Buckets | /api/v1/bucket/create | POST |
| Buckets | /api/v1/bucket/update-items | POST |
| Buckets | /api/v1/bucket/update-label | POST |
| Buckets | /api/v1/bucket/update-visibility | POST |
| Buckets | /api/v1/bucket/get | POST |
| Buckets | /proxy/buckets | GET |
| Buckets | /api/v1/bucket/get-from-schema | POST | 

## API Reference
[Speedway API Reference](https://docs.sonr.io)

You can also access the Speedway API Reference locally alongside the Speedway UI. To access the reference using the UI, once signed in simply click the "Access API" button on the side navbar.