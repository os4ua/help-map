import AWS from "aws-sdk"

AWS.config.update({
    credentials: {
        accessKeyId: process.env.DB_ACCESS_KEY_ID,
        secretAccessKey: process.env.DB_SECRET_ACCESS_KEY,
    },
    region: process.env.DB_DEFAULT_REGION
});

const db = new AWS.DynamoDB.DocumentClient({ 
    apiVersion: "latest", 
    endpoint: process.env.DB_ENDPOINT
})

export default db;
