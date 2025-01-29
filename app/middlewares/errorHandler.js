const errorMiddleware = (err, req, res) => {
    console.error(`Error: ${err.message}`);
    console.error(err.stack);

    res.status(500).json({
      message: err.message || 'Internal Server Error',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
  };
  
  export default errorMiddleware;