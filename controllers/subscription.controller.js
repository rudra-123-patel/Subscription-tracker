import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
  try {
    const subcription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({ success: true, data: subcription });
  } catch (error) {
    next(error);
  }
};
