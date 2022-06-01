import * as express from "express";
import mongoose from "mongoose";
import MoneySchema from "../models/money.model.js";
const router = express.Router();
const { startSession } = mongoose;

router.post("/v1/api/user", async (req, res) => {
  try {
    console.warn("money.routes req ", req);
    const { userID, amount } = req.body;
    console.warn("money.routes ", userID, amount);
    console.warn("money.routes req ", req);

    const rs = await MoneySchema.create({ userID, amount });
    res.json({
      data: rs,
    });
  } catch (error) {
    console.error(error);
  }
});

router.post("/v1/api/transfer", async (req, res) => {
  const session = await startSession();

  try {
    const { fromId, toId, amount } = req.body;

    //create transaction
    session.startTransaction();
    console.log(`session `, session);

    const amountFrom = await MoneySchema.findOneAndUpdate(
      {
        userID: fromId,
      },
      {
        $inc: { amount: -amount },
      },
      {
        session,
        new: true,
      }
    );

    console.log(`Account fromId ${fromId} is ::::: `, amountFrom);

    const amountTo = await MoneySchema.findOneAndUpdate(
      {
        userID: toId,
      },
      {
        $inc: { amount: +amount },
      },
      {
        session,
        new: true,
      }
    );

    console.log(`Account toId  ${toId} is ::::: `, amountTo);

    return res.json({
      msg: " Transfer is okey !!!!",
    });
  } catch (error) {
    console.error(error);
    return res.json({
      msg: " Error : " + error,
    });
  }
});

export default router;
