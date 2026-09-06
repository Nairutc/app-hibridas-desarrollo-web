const miMiddleware = ( req, res, next ) => {
    console.log('Hola desde el middleware');
    next();
}

export default miMiddleware;
