import jwt, { decode } from "jsonwebtoken";

//jwt is json web token.
//.sign() takes 3 parameters i.e., user data, secret, options.
export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || somethingsecret,
    {
      expiresIn: "30d",
      //token will expire in 30-days.
    }
  );
};

//to get the  user "token" inside of the server, so that we can add that to the "orders" to identify which user it is.
export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); //Bearer XXXXXXXXXX
    jwt.verify(
      token,
      process.env.JWT_SECRET || "somethingsecret",
      (error, decode) => {
        if (error) {
          res.status(401).send({ message: "Invalid Token" });
        } else {
          //"decode" has the value of the user (name, email etc).
          req.user = decode; //passing 'user' as property of 'req', to the next middleware.
          next();
          //next will take the flow from here to the next middleware.
          //In our case, we used "isAuth" middleware inside out "orderRouter". So, flow will directly go to the "ordrRouter".
        }
      }
    );
  } else {
    res.status(401).send({ message: "No Token" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};
