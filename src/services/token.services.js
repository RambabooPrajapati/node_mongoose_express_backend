import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js"

const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId);
        // console.log(`------user------- ${user}`)
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh access token", error);
    }
}

export { generateAccessAndRefreshTokens }