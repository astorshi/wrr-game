const { Router } = require("express");
const router = Router();
const Unit = require('../models/unitModel')

// router.get("/", (req, res) => {
//     res.send("hi Wo!");
// });

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
        console.log(newUnit)
          res.sendStatus(200);
      } catch (error) {
        res.sendStatus(500);
      }
    }

});


module.exports = router;