const express = require("express");
const router = express.Router();

const {
  getGoals,
  setGoal,
  updateGoal,
  deletGoal,
} = require("../controllers/goalController.js");

const {protect} = require("../middleware/authMiddleware.js");
 
router.route("/").get(protect,getGoals).post(protect,setGoal);

router.route("/:id").delete(protect,deletGoal).put(protect,updateGoal);

module.exports = router;
