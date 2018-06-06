const storage = require("localforage")
storage.setDriver(storage.INDEXEDDB)

self.addEventListener("message",async (e)=>{
  /*do stuff*/
  await storage.setItem("meTest","meTestValue")
  self.postMessage("Done!")
})