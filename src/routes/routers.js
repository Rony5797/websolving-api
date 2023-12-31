const express = require("express");
const { SendEmailUtility } = require("../controller/emailController");
const SubscribeModel = require("../models/subscribeModel");
const MessageModel = require("../models/messageModel");

const router = express.Router();

// Messeage Send me ...

router.post("/message", async (req, res) => {
  try {
    let { firstName, lastName, leads, title, message } = req.body;

    let finallMess = `FIRST-NAME: ${firstName} LAST_NAME: ${lastName} EMAIL: ${leads} TITLE:  ${title}   MEASSAGE:  ${message}`;
    let data = { firstName, lastName, leads, title, message };
    await MessageModel.create(data);
    await SendEmailUtility("websolvings@gmail.com", finallMess, title);
    res.status(200).json({ message: "Mail sent successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.post("/subscribe", async (req, res) => {
  try {
    let { email } = req.body;

    let cheek = await SubscribeModel.exists({ email });

    if (cheek) {
      return res.status(200).json({ message: "allready Subscribed" });
    } else {
      await SubscribeModel.create({ email: email });
      let subscribeMess = `Subscribed:   ${email}`;
      await SendEmailUtility(
        "websolvings@gmail.com",
        subscribeMess,
        "Subscribed websolvings."
      );
      await SendEmailUtility(
        email,
        "Thanks For subscribe websolvings!",
        "Websolvings."
      );
      return res.status(200).json({ message: "Thanks for subscribe us." });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
module.exports = router;
