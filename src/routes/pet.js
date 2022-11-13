const petController = require("../controllers/petController");

const role = require("../middleware/role.middleware");
const router = require("express").Router();

router.get("/pet", petController.getAllPets);
router.get("/pet/:id", petController.getPetById);

// router.patch("/pet/update", petController.updatePet);
router.post("/pet", petController.createNewpet);
router.delete("/pet/:id", petController.deletePetById);

module.exports = router;
