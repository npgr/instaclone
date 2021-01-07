const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolver");
require("dotenv").config({ path: ".env" });

mongoose.connect(
  process.env.BBDD,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  },
  (err, _) => {
    if (err) {
      console.log("error de conexion: ", err);
    } else {
      server();
    }
  }
);

mongoose.connection.on("connected", () => {
  console.log("mongoose is connected");
});

function server() {
  const serverApollo = new ApolloServer({
    typeDefs,
    resolvers,
  });

  serverApollo.listen().then(({ url }) => {
    console.log(`Servidor listo en la url: ${url}`);
    console.log("version 5");
  });
}
