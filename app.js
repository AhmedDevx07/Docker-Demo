const http = require("http");
const { MongoClient } = require("mongodb");

const url =
  process.env.MONGO_URL ||
  "mongodb://ahmeddevx07:docker123@db:27017/mydb?authSource=admin";
const dbName = "mydb";

const server = http.createServer(async (req, res) => {
  if (req.url !== "/") {
    res.end("");
    return;
  }

  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("visits");
    await collection.insertOne({ visitedAt: new Date() });
    const count = await collection.countDocuments();
    res.end(`Hello from Docker! Total visits: ${count}`);
  } catch (err) {
    res.end("DB connection error: " + err.message);
  } finally {
    await client.close();
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
