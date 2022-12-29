export const getDbConnectionString = () => {
    return process.env.MONGO_DB_CONNECTION_STRING!;
    //return "mongodb+srv://Guligabi:rYwmTO1u7KDMtO6v@odenseemergencycluster.bfcpbx6.mongodb.net/test";
}