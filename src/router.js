const express = require("express");
const router = express.Router();

const { validate, schema} = require("./validation")
const EntityService = require('./service')

router.get("/",  (req, res) => {
    return res.send("API");
});

router.post("/entities/filter", validate(schema), async (req, res) => {
    try {
        const {startId, endId} = req.body;
        const entities = await EntityService.getAllRange(startId, endId);

        if (entities.length === 0) {
            return res.status(404).json({
                'message': 'Error no se encuentra para rango especificado'
            })
        }

        return res.json(entities)    
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;