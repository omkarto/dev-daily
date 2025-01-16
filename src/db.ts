import StaticJsonDb from "static-json-db";

var db = new StaticJsonDb("data"); // using directory 'data'



export async function setUpDb() {
  .then(response => response.json())
  .then(data => {
      console.log(data);
      console.log("First Terminal Name:", data[0].name);
  })
  (async () => {
    await db.set("key1", "Hello World1");
    await db.set("key2", "Hello World2");
    await db.set("abc", "def");
    await db.write()
  })();
}


export async function set(key:string,val:string) {
    await db.set(key, val);
}

export async function getAll(q:string) {
    return  await db.getAll(q);
}

export async function get(q:string) {
  return  await db.get(q);
}