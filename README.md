# ts-api

## What is it?

A small Node.js app exposing a route and caching the result into Redis.

It is containerizable using a Dockerfile. Kubernetes manifests are also present to deploy it.

## How to run it?

Part of the project is a Makefile exposing a few commands to build, setup a Minikube environment and deploy the app.
