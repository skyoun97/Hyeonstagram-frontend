export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")) || false,
};

export const resolvers = {
  Mutation: {
    logUserIn: async (_, { token }, { cache }) => {
      await localStorage.setItem("token", token);
      window.location.reload();
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      window.location.assign("/");
      return null;
    },
  },
};
