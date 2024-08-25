# Random Number Generator with Serverless Framework

## Overview

This project deploys an AWS Lambda function using the Serverless Framework. The function generates a random number between 0 and 99. GitHub Actions is used for continuous integration and deployment.

## Functionality

- **Function**: Generates a random number between 0 and 99.
- **Trigger**: AWS Lambda function.
- **Deployment**: Managed by the Serverless Framework and GitHub Actions.

## Setup

### Local Development

Ensure you have the following directories and files:

- `node_modules/`
- `webpack/`
- `.idea/`
- `.vscode/`
- `.DS_Store`
- `Thumbs.db`
- `.env` (for environment variables)

### Serverless Configuration

The Serverless Framework configuration is defined in `serverless.yml`. It sets up the AWS Lambda function with the following details:

```yaml
service: aws-basic-serverless-framework

provider:
  name: aws
  runtime: nodejs20.x
  stage: dev
  region: us-west-1
  deploymentBucket:
    name: awsbasicserverless

functions:
  hello:
    handler: src/handler.generateRandomNumber


### Github Actions
name: Deploy serverless framework

on:
  push:
    branches:
      - main

jobs:
  deploy:
    name: deploy
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [20.x]
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js ${{ matrix.node-version}}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - name: serverless deploy
        uses: serverless/github-action@v3.2
        with:
          args: deploy
        env:
          SERVERLESS_ACCESS_KEY: ${{ secrets.SERVERLESS_ACCESS_KEY }}
          # or if using AWS credentials directly
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}

### Env Variables
Make sure to set the following environment variables in your .env file or GitHub Secrets:
-SERVERLESS_ACCESS_KEY
-AWS_ACCESS_KEY_ID
-AWS_SECRET_ACCESS_KEY

