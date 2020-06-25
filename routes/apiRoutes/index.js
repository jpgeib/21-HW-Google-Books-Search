const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./Books");
const googleRoutes = require("./Google");

//Book Routes

router.use("/books", bookRoutes);

//Google Routes

router.use("/google", googleRoutes);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;