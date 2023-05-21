import React from 'react';

const Mensaje = ({nuevoMensaje}) => {
    return (
        <section className='bg-primary bg-opacity-25 py-5'>
            <h1 className='text-center text-danger'>Hello {nuevoMensaje}</h1>
        </section>
    );
};

export default Mensaje;