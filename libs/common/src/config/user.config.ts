export const UserConfig = () => ({
    app: {
        port: +process.env.USER_SERVICE_PORT,
        host: process.env.USER_SERVICE_HOST,
    },
});
  