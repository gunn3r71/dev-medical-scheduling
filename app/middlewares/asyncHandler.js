const asyncHandler = (fn) => (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} - ${req.originalUrl}`);

    Promise.resolve(fn(req, res, next)).catch(next);
  };
  
export default asyncHandler;