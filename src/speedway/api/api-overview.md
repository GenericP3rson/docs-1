---
title: API Overview
---
# Speedway API Overview

The Speedway API is a RESTful API that allows you to interact with the Speedway UI. The API is used to create, update, and delete Speedway resources such as schemas, objects, and buckets. The API is also used to query objects and buckets and to perform other operations such as creating an account or logging in.

## API Endpoints

The Speedway API is available at the following endpoints:

| Module | Endpoint |
|-------------|----------|
| Registry  | http://localhost:8080/api/v1/account/create |
| Registry  | http://localhost:8080/api/v1/account/login |
| Registry  | http://localhost:8080/api/v1/account/info |
| Schema | http://localhost:8080/api/v1/schema/create |
| Schema | http://localhost:8080/api/v1/schema/get |
| Schema | http://localhost:8080/proxy/schema |
| Objects | http://localhost:8080/api/v1/object/build |
| Objects | http://localhost:8080/api/v1/object/get |
| Buckets | http://localhost:8080/api/v1/bucket/create |
| Buckets | http://localhost:8080/api/v1/bucket/update |
| Buckets | http://localhost:8080/api/v1/bucket/get |

## API Reference

[Speedway API Reference](https://docs.sonr.io)