import { MongoClient, ServerApiVersion } from 'mongodb';

function dbConnect(collectionName) {
    const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@durjoys-db.smvgnqx.mongodb.net/?retryWrites=true&w=majority&appName=Durjoys-DB`;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db(process.env.CLUSTER_NAME).collection(collectionName)
}

export default dbConnect