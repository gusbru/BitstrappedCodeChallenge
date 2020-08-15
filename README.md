# Node API Code Challenge

## Introduction

Purpose of this challenge is to build a simple NodeJS API,
hook into `https://api.ratesapi.io/api/latest` and return back
the results for a specific country code

## Steps

1. Create Node.js API
2. Connect to RatesApi.io
3. Create 3 routes.
   1. One route returns all the currencies (`/api/all`);
   2. the other route takes in a currency as a route parameter and returns the exchange
      rate for that currency (`api/CAD`);
   3. (**bonus**) add another route that accepts the base as a query parameter. I.e api.com/CAD?base=USD
4. Setup docker container
5. Deploy Node.js code on a server, any server.

## Completion:

Once complete ensure it is deployed on a server and public, then checked in the code to a source code repository such as Github.

## Installation

To install the NodeJS API, first clone the repository:

```
git clone https://github.com/gusbru/BitstrappedCodeChallenge
```

Enter into the project folder

```
cd BitstrappedCodeChallenge
```

Create a docker network called `my-net`, if it does not exist yet.

```
docker network create my-net
```

Build the docker, replacing `<user>` and `<docker-name>` by your username and a docker name,
respectively. The process of building a docker will download an image containing the most
recent node installed. Besides, it will download all the dependencies needed by the
API.

```
docker build -t <user>/<docker-name> .
```

Launch the docker, substituting the `<docker-alias>` by a name that your docker will
receive when it was launched, `<user>` and `<docker-name>` for the user and docker name
used in the step above.

```
docker run --name <docker-alias> --rm --network my-net -p 3030:3030 -d <user>/<docker-name>
```

If the docker is running locally, test the application by making a `get` request to the address.

```
localhost:3030/api
```

## Usage

The API can retrieve currencies for different countries. The default base currency is the euro (EUR).

All the endpoints are relative to the `/api` address.

To retrieve all the currencies, make a `get` request to the `/` endpoint.

To retrieve the currency for a specific country add the country code at the end, e.g., `/CAD`, will
returns the currency for `Canada`.

To change the base currency, add the `?base=` query at the end of the address, e.g., `/CAD?base=USD` to
change the base to `USD`.

## Live Demo

It is possible to see the API working through the following address
[http://bitstrappedcodechallenge.gustavobrunetto.com](http://bitstrappedcodechallenge.gustavobrunetto.com/) or [http://34.71.144.216:3030/api](http://34.71.144.216:3030/api)
