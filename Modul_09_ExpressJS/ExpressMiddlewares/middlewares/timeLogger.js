export const timeLogger = (req, res, next) => {
  const date = new Date();
  console.log(`${req.method} ${date.toLocaleTimeString()}`);
  next();
};
