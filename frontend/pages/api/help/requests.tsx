import db from "../../../db"
import { v4 as uuidv4 } from 'uuid'
import { DocumentClient } from "aws-sdk/clients/dynamodb"

const coordinatorId = "dima"

async function handleGet(req, res) {

    const params: DocumentClient.QueryInput = {
        TableName: "HelpRequests",
        ExpressionAttributeValues: {
            ":cid": "dima"
        },
        KeyConditionExpression: "CoordinatorId = :cid",
        ProjectionExpression: "RequestId, typeOfHelp, lat, lng, address"
    }

    return new Promise((resolve) => {
        db.query(params, (err, data) => {
            if (err) {
                res.json(err);
                res.status(500).end();
                resolve([])
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data.Items));
                resolve({})
            }
        })
    })
}

async function handlePost(req, res) {

    const params = {
        TableName: "HelpRequests",
        Item: {
            CoordinatorId: coordinatorId,
            RequestId: uuidv4(),
            typeOfHelp: req.body.typeOfHelp,
            lat: req.body.lat,
            lng: req.body.lng,
            address: req.body.address
        }
    };

    return new Promise((resolve) => {
        db.put(params, (err, data) => {
            if (err) {
                res.json(err);
                res.status(500).end();
                resolve([])
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data.Attributes));
                resolve({})
            }
        })
    });

}

export default async function (req, res) {
    if (req.method === 'GET') {
        await handleGet(req, res)
    } else if (req.method === 'POST') {
        await handlePost(req, res)
    }
}
