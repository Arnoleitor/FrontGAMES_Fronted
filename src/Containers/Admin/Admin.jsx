import './Admin.scss'
import React from 'react';




const Admin = () => {

    return (
        
            <div className='main-container-one'>
                <h1 className="admin-h1"></h1>
                <div className=""></div>
                <h2 className="text-center mt-2">Usuarios Registrados </h2>
                <div>
                    <div className="users-registers-title">
                        <p className="colum-components-admin-print" >Nombre</p>
                        <p className="colum-components-admin-print" >Email</p>
                        <p className="colum-components-admin-print" >Id Usuario</p>
                        <p className="colum-components-admin-print" >Eliminar Usuarios</p>
                    </div>
                    <div className="table-home-print">
                        <div className="colum-home-print">


                            <p className="colum-components-admin-print-register"></p>
                        </div>
                        <div className="colum-home-print">

                            <p className="colum-components-admin-print-register">

                            </p>

                        </div>
                        <div className="colum-home-print">

                            <p className="colum-components-admin-print-register">

                            </p>


                        </div>
                        <div className="colum-home-print">

                            <p className="colum-components-admin-print-register">
                                <span className="borrar">Eliminar Usuario</span>
                            </p>
                            <div>
                                
                                          
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
             
       
    )

};


export default Admin;