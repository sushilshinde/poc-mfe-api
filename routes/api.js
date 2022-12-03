const express = require("express")
const router = express.Router()

const IndexController = require("../controllers/index.controller")
const RepoController = require("../controllers/repo.controller")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { indexValidator } = require("../middlewares/validators/index.validations")

router.get("/", IndexController.index)
router.post("/", validate(indexValidator), IndexController.indexPost)

router.get("/repositories", RepoController.repositories)

module.exports = router
