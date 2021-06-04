import generator from "@open-rpc/generator"
describe("test code generation", () => {
  it("should generate a client", async () => {

    await generator({
      "outDir": "../generated-client",
      "openrpcDocument": `${__dirname}/../test-openrpc.json`, 
      "components" :[ 
        {
          "type": "custom",
          "customType": "client",
          "customComponent": `${__dirname}/../build/src/index.js`, 
          "language": "typescript",
          "name": "test-gen"
        }  
      ]
    }) 
  })
})