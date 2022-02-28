import db from "../../../db"

export default async function(req, res) {
    if(req.method === 'GET') {
        res.json([])
    } else if (req.method === 'POST') {
        console.log('received new request', req.body)
        res.json(null)
    }
}
