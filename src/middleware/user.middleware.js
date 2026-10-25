import { userSession } from "../models/user.session.js"; 

export const requireAuth = async (req, res, next) => {
  try {
    const sessionId = req.headers.authorization;

    if (!sessionId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const session = await Session.findOne({ sessionId });

    if (!session) {
      return res.status(401).json({
        success: false,
        message: "Invalid session",
      });
    }

    if (session.expiresAt < new Date()) {
      await Session.deleteOne({ _id: session._id });

      return res.status(401).json({
        success: false,
        message: "Session expired",
      });
    }

    req.userId = session.userId;

    next();
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};