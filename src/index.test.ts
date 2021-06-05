import generator from "@open-rpc/generator"
describe("test code generation", () => {
  it("should generate a client", async () => {

    await generator({
      "outDir": `${__dirname}/../generated-client`,
      "openrpcDocument": `${__dirname}/../test-openrpc.json`, 
      "components" :[ 
        {
          "openRPCPath": null, 
          "type": "custom",
          "customType": "client-nostatic",
          "customComponent": `${__dirname}/../build/src/index.js`, 
          "language": "typescript",
          "name": "test-gen"
        }  
      ]
    }) 
  })
})
