import './Admin.scss'
import React from 'react';




const Admin = () => {

    return (
        <div className='designAdmin'>
        <div class='containertable'>
            <div className='header-tools'>
                <div className='tools'>
                    <ul>
                        
                       
                        <button>
                            <i className='material-icons'>delete </i>
                        </button>
                      
                      
                     
                        <button>
                            <i className='material-icons'>change Data </i>
                        </button>
                       
                     
                        <button>
                            <i className='material-icons'>ban</i>
                        </button>
                        
                        
                    </ul>
                </div>

                <div className='search'>
                    <input type="text" name="" class="search-input" placeholder='Search User'></input>
                </div>
            </div>
            <table className='datatable'>

                <thead>
                    <tr className='tr'>
                        <th></th>
                        <th>name</th>
                        <th>email</th>
                        <th>nickname</th>
                        <th>city</th>
                        <th>surname</th>
                        <th>id</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className='table-checkbox'><input type ="checkbox" name="" id= ""></input></td>
                        <td><span className='available'></span></td>
                        <td>pepe</td>
                        <td>pepe@email.com</td>
                        <td>pepito</td>
                        <td>madrid</td>
                        <td>parra</td>
                        <td>pipi123</td>
                    </tr>
                    <tr>
                        <td className='table-checkbox'><input type ="checkbox" name="" id= ""></input></td>
                        <td><span className='available'></span></td>
                        <td>pepe</td>
                        <td>pepe@email.com</td>
                        <td>pepito</td>
                        <td>madrid</td>
                        <td>parra</td>
                        <td>pipi123</td>
                    </tr>
                    <tr>
                        <td className='table-checkbox'><input type ="checkbox" name="" id= ""></input></td>
                        <td><span className='available'></span></td>
                        <td>pepe</td>
                        <td>pepe@email.com</td>
                        <td>pepito</td>
                        <td>madrid</td>
                        <td>parra</td>
                        <td>pipi123</td>
                    </tr>
                    <tr>
                        <td className='table-checkbox'><input type ="checkbox" name="" id= ""></input></td>
                        <td><span className='available'></span></td>
                        <td>pepe</td>
                        <td>pepe@email.com</td>
                        <td>pepito</td>
                        <td>madrid</td>
                        <td>parra</td>
                        <td>pipi123</td>
                    </tr>
                    <tr>
                        <td className='table-checkbox'><input type ="checkbox" name="" id= ""></input></td>
                        <td><span className='available'></span></td>
                        <td>pepe</td>
                        <td>pepe@email.com</td>
                        <td>pepito</td>
                        <td>madrid</td>
                        <td>parra</td>
                        <td>pipi123</td>
                    </tr>
                </tbody>
            </table>
          
                </div>
                </div>
     


    )


};


export default Admin;