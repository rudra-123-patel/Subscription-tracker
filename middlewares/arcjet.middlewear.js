import aj from "../config/arcjet.js";

const arcjetMiddlewear = async (req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    return next(); // Skip Arcjet checks in dev
  }
  try {
    const decision = await aj.protect(req, { requested: 1 });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit())
        return res.status(429).json({ error: `Rate limit exceeded` });

      if (decision.reason.isBot())
        return res.status(403).json({ error: `bot detected` });

      return res.status(403).json({ error: `Acess denied` });
    }
    next();
  } catch (error) {
    console.log(`Arcjet middlewear error : ${error}`);
    next(error);
  }
};

export default arcjetMiddlewear;
