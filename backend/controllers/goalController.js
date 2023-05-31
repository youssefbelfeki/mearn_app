const asyncHandler = require('express-async-handler')

//desc Get goals
//route Get /api/goals
//access Private
const getGoals = asyncHandler(async(req, res) => {
  res.status(200).json({ message: "Get Goal" });
});

//desc Set goals
//route Get /api/goal
//access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    throw new error("Please add text");
  }
  res.status(200).json({ message: "Set Goal" });
});

//desc Update goals
//route Get /api/goals/:id
//access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal req.param.${id}` });
});

//desc delete goals
//route delete /api/goals/:id
//access Private
const deletGoal = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `delete Goal req.param.${id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deletGoal,
};
