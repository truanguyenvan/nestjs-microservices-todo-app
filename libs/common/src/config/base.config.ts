
export const BaseConfig = () => ({
    app: {
        port: +process.env.BASE_PORT,
        host: process.env.USER_HOST,
    }
});
