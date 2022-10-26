const express = require("express");
const router = express.Router();

const {
  getAllLists,
  getList,
  createList,
  updateList,
  deleteList,
} = require("../controllers/lists");

router.route("/").get(getAllLists).post(createList);
router.route("/:id").get(getList).patch(updateList).delete(deleteList);

module.exports = router;
