import jwt from 'jsonwebtoken';

export const VerifyToken = (req, res, next) => {
  // Read token correctly
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized user - no token available"
    });
  }

  try {
    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Something went wrong
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user - invalid token"
      });
    }

    // Attach user ID to request
    req.userId = decoded.id;

    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Token verification failed",
      error: error.message
    });
  }
};
