function notFoundOne(one){
    if (!one) {
        const error = new Error("No hay nada");
        error.statusCode = 404;
        throw error;
      }
}

export default notFoundOne;