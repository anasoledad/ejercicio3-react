import { Button } from 'react-bootstrap';
import { useState } from 'react';

const Mensaje = ({ nuevoMensaje }) => {
    const [msj, setMsj] = useState();

    return (
        <section className='bg-success bg-opacity-25 py-5'>
            <h1 className='text-center text-danger'>Hello {nuevoMensaje}{msj}!</h1>
            <div className="d-flex justify-content-center">
                <Button variant='primary' className="mt-3" onClick={() => setMsj(' (from changes state)')}>
                    Click me
                </Button>
            </div>
        </section>
    );
};

export default Mensaje;