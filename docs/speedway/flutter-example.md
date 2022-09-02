---
title: Advanced - Flutter Example
---

## Overview
The example project is an employee timesheet, which allows employees to clock in and out of work with verifiable identity and precise time stamps due to Sonr's blockchain technology. The project is a simple example of how to use Speedway to create schemas, objects, and buckets. The project also demonstrates how to query objects and buckets.

## Logic
The project consists of two schemas, one for employees and one for timesheets. The employee schema contains the employee's name, address, and phone number. The timesheet schema contains the employee's name, the date, and the time they clocked in, or the time they clocked out.  The project also consists of two buckets, one for employees and one for timesheets. The employee bucket contains all the employees in the company. The work record bucket contains all the work records with details such as employee, start time, end time, and date.

## Using the Speedway CLI

### Create an Account
To create an account, run the following command:
```
speedway account create
```
You will be prompted to enter a password. This password will be used to encrypt your vault.

![Create Account GIF](https://raw.githubusercontent.com/sonr-io/docs/main/assets/create-account-cli.gif)


### Create a Schema
To create a schema, run the following command:
```
speedway schema create
```
The CLI will attempt to automatically login. Once logged in, you will be prompted to enter the schema name, and the schema fields. The schema fields are the fields that will be used to create objects. The schema fields are entered in the following format: ```field_type```. The field type can be one of the following: ```string```, ```int```, ```float``` and ```bool```. The CLI will then create the schema and display the schema DID.

![Create Schema GIF](https://raw.githubusercontent.com/sonr-io/docs/main/assets/create-account-cli.gif)

### Create an Object
To create an object, run the following command:
```
speedway object build
```
The CLI will attempt to automatically login. Once logged in, you will be prompted to enter the schema ID. After entering the schema ID, the CLI will prompt you to enter the object fields. Object Fields are entered via a prompt from the CLI, you will be required to enter the ```field_value``` for a ```field_name```. The CLI will then create the object and display the object CID.

![Create Object GIF](https://raw.githubusercontent.com/sonr-io/docs/main/assets/create-object-cli.gif)

### Create a Bucket
To create a bucket, run the following command:
```
speedway bucket create
```
The CLI will attempt to automatically login. Once logged in, you will be prompted to enter the bucket label. After entering the bucket label, the CLI will prompt you to enter the visibility of the bucket. The visibility can be one of the following: ```public```, ```private```. The role can be one of the following: ```application```, ```user```. Application buckets are visible to all users. User buckets are visible only to the user who created the bucket. The CLI will then create the bucket and display the bucket DID.

## Using the Speedway UI
[Video Tutorial (Coming Soon)](https://)
