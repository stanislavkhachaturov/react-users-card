import jwt from "jsonwebtoken";
import key from "./secretKey.json"

const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) {
        return false;
    }

    try {
        const decoded = jwt.verify(token, key.JWT_KEY);
        return decoded;
    } catch (error) {
        return false;
    }
}

export default checkAuth;