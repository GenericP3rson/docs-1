---
title: Speedway Getting Started
---

# Getting Started with Speedway
Getting started with Speedway is easy. Speedway allows you to interact with the Motor API. Speedway is used to create, update, and delete Speedway resources such as schemas, objects, and buckets. The CLI is also used to query objects and buckets and to perform other operations such as creating an account or logging in.

## Speedway Project Installation
In order to use Speedway, you must first install the Speedway project from the GitHub Repository. You can do this by running the following command: ```git clone https://github.com/sonr-io/speedway.git```

You may also download the project as a zip file from the GitHub Repository.

## Getting Started with the Speedway UI

### Requirements
- NodeJS 
- NPM or Yarn
- Go version 1.16 or higher

### Install Speedway UI
1. Clone the project from GitHub (if you haven't already)

2. CD into the project directory

3. Install the dependencies ```npm install``` or ```yarn install```

### Run Speedway UI
1. CD into the project directory (if you haven't already)

2. After the dependencies are installed, run the build script ```npm run move-build``` or ```yarn move-build```

3. Start the server ```task server:start:release``` or for debug mode ```task server:start:debug```

4. Open your browser and navigate to ```http://localhost:8080``` to view the UI 

## Getting Started with the Speedway CLI
### Installation:

[Speedway CLI Installation](./cli/cli-install.md)

### Commands:

[Speedway CLI Commands](./cli/cli-commands.md)

### Usage:
```
  speedway [command]
```

## Example Speedway Project
### Overview
The example project is an employee timesheet, which allows employees to clock in and out of work with verifiable identity and precise time stamps due to Sonr's blockchain technology. The project is a simple example of how to use Speedway to create schemas, objects, and buckets. The project also demonstrates how to query objects and buckets.

### Logic
The project consists of two schemas, one for employees and one for timesheets. The employee schema contains the employee's name, address, and phone number. The timesheet schema contains the employee's name, the date, and the time they clocked in, or the time they clocked out.  The project also consists of two buckets, one for employees and one for timesheets. The employee bucket contains all the employees in the company. The work record bucket contains all the work records with details such as employee, start time, end time, and date.

### Using the Speedway CLI

#### Create an Account
To create an account, run the following command:
```
speedway account create
```
You will be prompted to enter a password. This password will be used to encrypt your vault.

![Create Account GIF](https://raw.githubusercontent.com/sonr-io/docs/docs/speedway/assets/create-account-cli.gif)


#### Create a Schema
To create a schema, run the following command:
```
speedway schema create
```
The CLI will attempt to automatically login. Once logged in, you will be prompted to enter the schema name, and the schema fields. The schema fields are the fields that will be used to create objects. The schema fields are entered in the following format: ```field_type```. The field type can be one of the following: ```string```, ```int```, ```float``` and ```bool```. The CLI will then create the schema and display the schema DID.

![Create Schema GIF](https://raw.githubusercontent.com/sonr-io/docs/docs/speedway/assets/create-schema-cli.gif)

#### Create an Object
To create an object, run the following command:
```
speedway object build
```
The CLI will attempt to automatically login. Once logged in, you will be prompted to enter the schema ID. After entering the schema ID, the CLI will prompt you to enter the object fields. Object Fields are entered via a prompt from the CLI, you will be required to enter the ```field_value``` for a ```field_name```. The CLI will then create the object and display the object CID.

![Create Object GIF](https://raw.githubusercontent.com/sonr-io/docs/docs/speedway/assets/create-object-cli.gif)

#### Create a Bucket
To create a bucket, run the following command:
```
speedway bucket create
```
The CLI will attempt to automatically login. Once logged in, you will be prompted to enter the bucket label. After entering the bucket label, the CLI will prompt you to enter the visibility of the bucket. The visibility can be one of the following: ```public```, ```private```. The role can be one of the following: ```application```, ```user```. Application buckets are visible to all users. User buckets are visible only to the user who created the bucket. The CLI will then create the bucket and display the bucket DID.

### Using the Speedway UI
[Video Tutorial (Coming Soon)](https://)