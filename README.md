# Near Client OpenRPC Generator

Generate Type Safe Near Clients for interacting with Near Smart Contracts.

<center>
  <span>
    <img alt="GitHub release" src="https://img.shields.io/github/release/xops/snaps-openrpc-generator.svg" />
    <img alt="GitHub commits since latest release" src="https://img.shields.io/github/commits-since/xops/snaps-openrpc-generator/latest.svg" />
  </span>
</center>

A Generator tool for creating typescript clients for [Near](https://github.com/near/near-api-js) using [OpenRPC](https://github.com/open-rpc/spec) tools.

It does this via an [OpenRPC Generator Custom Component](https://github.com/open-rpc/generator#custom-component-generation-configuration).

## Features:

- Can generate:
  - Clients for accessing your Near Smart Contracts 

# In a new project

_Note: if you are on an ARM based Mac, you will need to `brew install vips`_

Make a new folder for your project
```shell
$ mkdir MyNearContract && cd MyNearContract
```

```
npm init
```

## Install

```shell
$ npm install @shipsgold/open-rpc-near-client-generator @open-rpc/generator --save-dev
```

## Usage

### Create a generator config

###### open-rpc-generator-config.json
```shell
echo '{
{
  "openrpcDocument": "./openrpc.json",
  "outDir": "./generated-client",
  "components": [
      {
          "type": "custom",
          "name": "test-contract-client",
          "language": "typescript",
          "customComponent": "../../../../build/src/index.js",
          "customType": "client"
      } 
  ]
' > open-rpc-generator-config.json
```

Write an OpenRPC Document that describes your plugins interface, and includes any documentation, examples, etc you may want. You can start with one of the [OpenRPC examples](http://github.com/open-rpc/examples), write your own with the help of the [OpenRPC Playground](playground.open-rpc.org), or start from the hello world contract description:


###### open-rpc.json
```shell
echo '{
  "openrpc": "1.2.4",
  "info": {
    "title": "MyNearContract",
    "version": "1.0.0"
  },
  "methods": [
    {
      "name": "hello",
      "description": "a method that returns world",
      "params": [],
      "tags": [{
        "$ref": "#/components/tags/view"
      }],
      "result": {
        "name": "helloWorldResult",
        "schema": {
          "type": "string"
        }
      },
      "examples": [
        {
          "name": "helloWorldExample",
          "params": [],
          "result": {
            "name": "world",
            "value": "world"
          }
        }
      ]
    }
  ],
  "components": {
    "tags": {
      "change" : {
        "name": "change",
        "description": "change method"
      },
      "view" : {
        "name": "view",
        "description": "view method"
      },
    }
  }
}' > openrpc.json
```
###### Note In The Example above 
We use tags with the OpenRPC documents for Near to specify if a method is a view method or a change method. These tags,
enable us to generate a client that will automatically specify those parameters for gas and deposits.

#### Run the OpenRPC Generator


```shell
$ npx open-rpc-generator generate -c open-rpc-generator-config.json
```

To run the generated Near client:

```shell
cd generated/custom/typescript
npm install .
```

## Resources

- [Getting Started Video (Demo)](https://www.youtube.com/watch?v=46nJ4AWHmvw) - The basics of how to use this tool 
- [OpenRPC Near Contract Standards](https://github.com/swappland/open-rpc-near-token-standards)
- [@open-rpc/generator package](https://www.npmjs.com/package/@open-rpc/generator)
- [example open-rpc documents](https://github.com/open-rpc/examples/tree/master/service-descriptions)