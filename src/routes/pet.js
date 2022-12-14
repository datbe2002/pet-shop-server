const petController = require("../controllers/petController");

const role = require("../middleware/role.middleware");
const router = require("express").Router();

router.get("/pet", petController.getAllPets);
router.get("/pet/:id", petController.getPetById);
router.get("/search", petController.searchByName);

router.patch("/pet/update", petController.updatePet);
router.post("/pet", role("Admin"), petController.createNewpet);
router.delete("/pet/:id", petController.deletePetById);

module.exports = router;
