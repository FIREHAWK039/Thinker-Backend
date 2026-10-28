import { User } from "../models/user.models.js";

export const handleUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("_id name email");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Profile error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
