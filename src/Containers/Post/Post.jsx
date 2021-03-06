import './Post.scss'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RES_POST } from '../../Redux/types';
import { RES_COMENTS } from '../../Redux/types';
import { RES_FRIENDS } from '../../Redux/types';
import { RES_MESSAGE } from '../../Redux/types';
import imageuser from '../../Assets/Images/imageuser2.png';



const Post = (props) => {

  const [post, setPost] = useState({

    title: '',

    text: '',

    image: 'a'

  });

  const userHandler = (e) => {

    setPost({ ...post, [e.target.name]: e.target.value });

  }

  const [msgError, setmsgError] = useState("");
  const newPost = async () => {

    let body = {

      title: post.title,

      text: post.text,

      image: post.image,

    }
   
    // CREATE POST
    let token = {
      headers: { Authorization: `Bearer ${props.credentials.token}` }
    };

    try {

      let res = await axios.post("https://acefrontedgames.herokuapp.com/api/Post", body, token);
    } catch (error) {

      setmsgError("The post could not be created!");
      return;
    }
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }

  // RECEIVE POST


  let config = {
    headers: { Authorization: `Bearer ${props.credentials.token}` }


  };

  const [view_post, setRES_POST] = useState([]);

  const RES_POST = async () => {
    let res = await axios.get(`https://acefrontedgames.herokuapp.com/api/Post`, config);
    setRES_POST(res.data);



  };

  useEffect(() => {

    RES_POST()
  }, [])





  // CREATE COMMENTS
  const [coment, setComent] = useState({

    iduser: '',
    idpost: '',
    coment: '',


  });

  const userHandlercoment = (e) => {

    setComent({ ...coment, [e.target.name]: e.target.value });

  }


  const createcoment = async (props, postid) => {

    let body = {

      iduser: props.credentials.user.id,
      idpost: postid,
      coment: coment.coment,

    }

    let token = {
      headers: { Authorization: `Bearer ${props.credentials.token}` }
    };

    try {

      let res = await axios.post("https://acefrontedgames.herokuapp.com/api/Coment", body, token);
    } catch (error) {

      setmsgError("The coment could not be created!");
      return;

    }
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }




  // RECEIVE COMMENTS
  const [view_coment, setCOMENTS] = useState([]);

  const RES_COMENTS = async () => {
    let res = await axios.get(`https://acefrontedgames.herokuapp.com/api/Coment`, config);
    setCOMENTS(res.data);

  };

  useEffect(() => {

    RES_COMENTS()
  }, [])


  //RECEIVE FRIENDS

  const [view_friends, setFRIENDS] = useState([])


  const RES_FRIENDS = async () => {
    let res = await axios.get(`https://acefrontedgames.herokuapp.com/api/Friend`, config);
    setFRIENDS(res.data);
    

  };

  useEffect(() => {

    RES_FRIENDS()
  }, [])

  //RECEIVE MESSAGES


  const [view_message, setMESSAGE] = useState([])


  const RES_MESSAGE = async () => {
    let res = await axios.get(`https://acefrontedgames.herokuapp.com/api/Message`, config);
    setMESSAGE(res.data);
   
  };
  
  useEffect(() => {

    RES_MESSAGE()
  }, [])
  /////////////////////////////////////////////
  // CREATE MESSAGE
  const [message, setMessage] = useState({

    message: '',

 
  });

  const userHandlermessage = (e) => {

    setMessage({ ...message, [e.target.name]: e.target.value });

  }
  

  const createmessage = async (props) => {
  
    let body = {

      idchat: view_message[0]?.idchat,
      idfriends: view_message[0]?.idfriends,
      message: message.message,

    }
   
    let token = {
      headers: { Authorization: `Bearer ${props.credentials.token}` }
    };
    
    try {

      let res = await axios.post("https://acefrontedgames.herokuapp.com/api/Message", body, token);
    } catch (error) {
      
      setmsgError("The message could not be created!");
      return;

    }
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }

  ///////////////////////////////////////////

  const createpost = async () => {

    let element = document.getElementById("createpost");
    element.classList.add("WindowMessagePopUp");
    let element_back = document.getElementById("openWindows");
    element_back.classList.add("seeWindows");

  }

  const closewindowcreate = () => {
    let element = document.getElementById("createpost");
    element.classList.remove("WindowMessagePopUp");

    let element_back = document.getElementById("openWindows");
    element_back.classList.remove("seeWindows");

  }

  const deletepost = async () => {
    let element = document.getElementById("delete");
    element.classList.add("WindowMessagePopUp");
    let element_back = document.getElementById("openWindowsDelete");
    element_back.classList.add("seeWindows");

  }

  const closewindowdeletepost = () => {
    let element = document.getElementById("delete");
    element.classList.remove("WindowMessagePopUp");

    let element_back = document.getElementById("openWindowsDelete");
    element_back.classList.remove("seeWindows");

  }





  return (

    <div className='designPost'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Search Post</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#"></a></li>
                  <li><a className="dropdown-item" href="#"></a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#"></a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search Post" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>

            </form>
          </div>

        </div>

      </nav>
      <div className='Container'>


        <div className='wall2'>

          <div className='buttonsPost'>

            <div onClick={() => createpost()} className='buttonCreatePost'>
              New Post

            </div>
            <div onClick={() => deletepost()} className='buttonDeletePost'>
              Delete post
            </div>
          </div>{

            view_post.map((post) => {

              return (
                
                <div className="post">
                  
                  <div className='contentpost'>

                    <div><img src={imageuser} /></div>

                    <div className='postname'> User: {post.nickname}</div>

                    <div className='postitle'> Title: {post.title}</div>

                  </div>
                  {
                    post.text
                  }
                  {/* {
                    post.image
                  } */}

                  <div className='zonecoment'>
                    <textarea className='popUsStyle' name="coment" rows="1" cols="50" placeholder='Write your coment here...' onChange={userHandlercoment}></textarea>
                    <button onClick={() => createcoment(props, post.id)} className='buttoncoment'><div>Coment</div></button></div>{

                    view_coment.map((coment) => {


                      if (coment.idpost == post.id) {
                        return (
                          <div className='coments'>
                            <div className='nameusercoment'>{coment.nickname}</div><br></br>
                            {coment.coment}
                            
                          </div>

                        )
                      }

                    })}



                </div>


              )
            })
          }





          <div className="" id="openWindows">
            <div className="createPost" id="createpost">

              <div className="closewindow" id="CLOSE" onClick={() => closewindowcreate()}>CLOSE WINDOW</div>

              <div className='popUs'>


                <input className='popUsStyle' type='text' placeholder="Enter tittle here" name="title" onChange={userHandler} />
                <input className='popUsStyle' type='text' placeholder="Enter text here..." name="text" onChange={userHandler} />
                <input className='popUsStyle' type='hidden' placeholder="Insert image" name="image" onChange={userHandler} />
            
            
              </div>

              <div className="CreateDataPost" onClick={() => newPost()}>Create post</div>

            </div>

            <div className="" id="openWindowsDelete">
              <div className="createPost" id="delete">

                <div className="closewindow" id="CLOSE" onClick={() => closewindowdeletepost()}>CLOSE WINDOW</div>
                <h3>??are you sure you want to delete this post?</h3>
                <h4>all content will be removed!</h4>
                <div className='DeletePost'>
                  <div onClick={() => closewindowdeletepost()} className='ButtonDeleteNo'>
                    No
                  </div>
                  <div className='ButtonDeleteYes'>
                    Yes
                  </div>

                </div>

                <div className='popUs'>


                </div>
              </div>
            </div>
          </div>


        </div>
        <div className='wall3'>

          <div>

            <div className='friends'>

              <div className='headerfriends'><p className='pfriends'>FRIENDS</p>

              </div>
              {

                view_friends.map((friends) => {

                  {
                    return (
                      <div className='friendsname'>
                        <div className='nameuserfriends'>{

                        }  {
                            friends.name

                          }<br></br>
                          NICKNAME: {
                            friends.nickname
                          }

                        </div>

                      </div>

                    )
                  }

                })}
            </div>
            <div className='tittleChat'><p className='pchat'>GENERAL CHAT</p>

            </div>
            <div className='chat'>


              <div className='windowChat'>

                {

                  view_message.map((message) => {
                   
                    {
                      return (

                        <div className='messagefriend'>

                          {
                            message.message

                          }

                        </div>

                      )
                    }

                  })}

                <div>
                </div>
              </div>
              <input className='zonechat' type="text" name="message"  placeholder='Write your message...' onChange={userHandlermessage} />
             



              <input className='sendbutton'  type="submit" value="Send Message" name="message" onClick={() => createmessage(props)}></input>
              
            </div>

          </div>
        </div>
      </div>
    </div>




  )
};

export default connect((state) => ({
  credentials: state.credentials
}))(Post);