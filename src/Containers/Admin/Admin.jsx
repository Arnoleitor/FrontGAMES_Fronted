import './Admin.scss'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';



const Admin = (props) => {
    const [datosusuario, setdatosusuario] = useState("");
    const [datapost, setdatapost] = useState("");
    const [deleteusers, setdatadeleteuser] = useState("");
    const [deleteposts, setdatadeleteposts] = useState("");
    useEffect(() => {

        takeusers();
        takepost();
    }, [])
    let token = {
        headers: { Authorization: `Bearer ${props.credentials.token}` }
    };
    const takeusers = async () => {
        try {
            let res = await axios.get("https://acefrontedgames.herokuapp.com/api/Users", token);
            setdatosusuario(res.data);
           


        } catch (error) {
            
        }
    };

    const takepost = async () => {
        try {
            let res_post = await axios.get("https://acefrontedgames.herokuapp.com/api/Post", {
                headers: {
                    'Authorization': `Bearer ${props.credentials.token}`

                }
            });
            setdatapost(res_post.data);

        } catch (error) {
           
        }

    };
    let config = {
        headers: { Authorization: `Bearer ${props.credentials.token}` }


    };
    const deleteuser = async (data) => {
      
        try {
            let res = await axios.delete(`https://acefrontedgames.herokuapp.com/api/User/${data}`, token,);
           
            setdatadeleteuser();


        } catch (error) {
            
        }
        setTimeout(() => {
            window.location.reload();
        }, 1);

    };
    const deletepost = async (run) => {


        try {

            let res = await axios.delete(`https://acefrontedgames.herokuapp.com/api/Post/${run.run.id}`, token, {
                headers: {
                    'Authorization': `Bearer ${props.credentials.token}`

                }
            });
            setdatadeleteposts();

        } catch (error) {
            
        }
        setTimeout(() => {
            window.location.reload();
        }, 1);

    };
    if (props.data_user?.token !== '' && props.credentials?.user.role=='admin') {
      
        return (

            <div className='main-container-one'>
                <h1 className="admin-h1"></h1>
                <div className=""></div>
                <h2 className="text-center mt-2">Usuarios Registrados </h2>
                {datosusuario.length > 0 &&
                    <div>
                        <div className="users-registers-title">
                            <p className="colum-components-admin-print" >Username</p>
                            <p className="colum-components-admin-print" >Email</p>
                            <p className="colum-components-admin-print" >Id User</p>
                            <p className="colum-components-admin-print" >Delete Users</p>
                        </div>
                        <div className="table-home-print" id='columnname'>
                            <div className="colum-home-print">
                                {datosusuario.map(run => {
                                    return (
                                        <p className="colum-components-admin-print-register" key={run._id}>
                                            {run.name}
                                        </p>
                                    )
                                })}



                            </div>
                            <div className="colum-home-print" id='columnemail'>
                                {datosusuario.map(run => {
                                    return (
                                        <p className="colum-components-admin-print-register" key={run._id}>
                                            {run.email}
                                        </p>
                                    )
                                })}



                            </div>
                            <div className="colum-home-print" id='columnid'>

                                {datosusuario.map(run => {
                                    return (
                                        <p className="colum-components-admin-print-register" key={run._id}>
                                            {run.id}
                                        </p>
                                    )
                                })}


                            </div>
                            <div className="colum-home-print">
                                {datosusuario.map(run => {
                                    let userdelete = run.id;

                                    return (
                                        <p onClick={() => deleteuser(userdelete)} className="colum-components-admin-print-register" key={run._id}>
                                            <span className="delete">Delete User</span>
                                        </p>)
                                })}


                                <div>


                                </div>

                            </div>
                        </div>
                    </div>
                }<div>
                    <h2>User posts</h2>
                    <div className="last-order-titles">
                        <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">id post</p></div>
                        <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">text post</p></div>
                        <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">ID User</p></div>
                        <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">Title</p></div>
                        <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">Delete post</p></div>
                    </div>
                    {datapost.length > 0 &&
                        <div id="table-home-print">
                            <div className="colum-home-print">
                                {datapost.map(run => {
                                    let borrar = run._id;

                                    return (

                                        <div className="table-print-pedidos">
                                            <div className="ColumnasPrincipales">
                                                <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                    {run.id}
                                                </p>
                                            </div>
                                            <div className="ColumnasPrincipales">
                                                <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                    {run.text}
                                                </p>
                                            </div>
                                            <div className="ColumnasPrincipales">
                                                <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                    {run.iduser}

                                                </p>
                                            </div>
                                            <div className="ColumnasPrincipales">
                                                <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                    {run.title}

                                                </p>
                                            </div>
                                            <div className="ColumnasPrincipales">
                                                <p onClick={() => deletepost({ run })} key={run._id}>
                                                    <span className="delete">Delete post</span>
                                                </p>


                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>
            </div>

        )
    }
};
export default connect((state) => ({
    credentials: state.credentials,
    post: state.post,
}))(Admin);
