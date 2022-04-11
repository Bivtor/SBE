const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGODB_URI;
console.log("here");
console.log('api is ${process.env.API_KEY}');

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect(async (err) => {
  const collection = client.db("jobs").collection("jobrequests");
  // perform actions on the collection object

  const pl = [
    {
      $match: {
        accomodates: {
          $gt: 4,
        },
      },
    },
  ];

  const agg = await collection.aggregate(pl).toArray();
  console.log(agg);
  client.close();
});

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

