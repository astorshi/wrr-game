const {Router} = require("express");
const router = Router();
const Unit = require('../models/unitModel')

router.get("/list", async (req, res) => {
    try {
        const allUnits = await Unit.find()
        res.json(allUnits)
    } catch (err) {
        res.sendStatus(500)
    }
});

router.post("/create", async (req, res) => {
    const {name, health, positionX, positionY, armor, magResist, unit, mana} = req.body;
    if (name && health && positionX && positionY && armor && magResist && unit) {
        try {
            const newUnit = await Unit.create({
                name,
                health,
                positionX,
                positionY,
                armor,
                magResist,
                unit,
                mana
            });
            res.sendStatus(200);
        } catch (error) {
            res.sendStatus(500);
        }
    }
});


router.delete("/remove", async (req, res) => {
    const {id} = req.body
    try {
        const allUnits = await Unit.findByIdAndDelete(id)
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(500)
    }
});

router.patch("/edit", async (req, res) => {
    const {name, health, positionX, positionY, armor, magResist, unit, mana, id} = req.body;
    if (name && health && positionX && positionY && armor && magResist && unit && id) {
        try {
            const updateUnit = await Unit.findByIdAndUpdate(id,{
                name,
                health,
                positionX,
                positionY,
                armor,
                magResist,
                unit,
                mana
            });
            res.sendStatus(200);
        } catch (error) {
            res.sendStatus(500);
        }
    }
});

module.exports = router;