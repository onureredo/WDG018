export const getOnlyMiddleware = (req, res, next) => {
  if (req.method === 'GET') {
    next();
  } else {
    return res.status(403).send('only GET reqeusts!');
  }
};
