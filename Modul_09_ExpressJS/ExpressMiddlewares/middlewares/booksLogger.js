export const booksLogger = (req, res, next) => {
  console.log(
    `Books route accessed with: ${req.method} method and path: ${req.path}`
  );
  next();
};
