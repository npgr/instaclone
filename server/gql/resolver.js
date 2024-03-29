const userController = require("../controllers/user");

const resolvers = {
  Query: {
    // User
    getUser: () => {
      console.log("obteniendo el usuario");
      return null;
    },
  },
  Mutation: {
    // User
    register: (_, { input }) => userController.register(input),
    login: (_, { input }) => userController.login(input),
  },
};

module.exports = resolvers;
