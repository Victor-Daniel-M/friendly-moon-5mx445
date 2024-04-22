const authProvider = {
    login: async ({ username, password }) => {
      (window as any).authenticated = true;
      return { success: true };
    },
    check: async () => {
      // auto login at first time
      if (typeof (window as any).authenticated === "undefined") {
        (window as any).authenticated = true;
      }
      return { authenticated: Boolean((window as any).authenticated) };
    },
    logout: async () => {
      (window as any).authenticated = false;
      return { success: true };
    },
    register: async () => {
      return { success: true };
    },
    forgotPassword: async () => {
      return { success: true };
    },
    resetPassword: async () => {
      return { success: true };
    },
    getIdentity: async () => ({ id: 1, name: "John Doe", avatar: "https://i.pravatar.cc/300"})
};

export default authProvider;