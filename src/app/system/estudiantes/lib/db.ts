// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI; // Asegúrate de tener la URI de tu base de datos en las variables de entorno
// const options = {};

// let client;
   let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }

// if (process.env.NODE_ENV === "development") {
//   // En desarrollo, usa una variable global para que el cliente se mantenga entre recargas de módulos
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // En producción, crea un nuevo cliente
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

    export default clientPromise;