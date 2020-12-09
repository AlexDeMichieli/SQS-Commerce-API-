const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv/config");

router.get("/", async (req, res) => {
  try {
    let config = {
      headers: {
        "User-Agent": "test",
        Authorization: "Bearer " + process.env.API_KEY,
      },
    };
    const resp = await axios.get(
      "https://api.squarespace.com/1.0/commerce/inventory",
      config
    );
    res.json(resp.data.inventory);
  } catch (err) {
    console.error(err.message);
  }
});
module.exports = router;
