import './Post.scss'
import React from 'react';




const Post = () => {

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

    <div class='designPost'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Search Post</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search Post" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>

            </form>
          </div>

        </div>

      </nav>
      <div className='Container'>

        {/* <div className='wall1'>

        </div> */}
        <div className='wall2'>
          
          <div className='buttonsPost'>

            <div onClick={() => createpost()} className='buttonCreatePost'>
              New Post
              
            </div>
            <div onClick={() => deletepost()} className='buttonDeletePost'>
              Delete post
            </div>
          </div>





          <div className="" id="openWindows">
            <div className="createPost" id="createpost">

              <div className="closewindow" id="CLOSE" onClick={() => closewindowcreate()}>CLOSE WINDOW</div>

              <div className='popUs'>

                <textarea className='popUsStyle' name="textarea" rows="8" cols="80" placeholder='Write your post here...'></textarea>
              
              </div>

              <div className="CreateDataPost">Create post</div>

            </div>
              
            <div className="" id="openWindowsDelete">
              <div className="createPost" id="delete">

                <div className="closewindow" id="CLOSE" onClick={() => closewindowdeletepost()}>CLOSE WINDOW</div>
                <h3>¿are you sure you want to delete this post?</h3>
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
              <div className='headerfriends'><p>friends</p>
              </div>
            </div>

            <div className='chat'><p>chat</p>

              <div className='windowChat'>

                <div className='headerChat'><p>Pepe</p>

                </div>
                <div>
                  <input className='zonechat' type="text" placeholder='Write your message...' />

                </div>

              </div>
              <input className='sendbutton' type="submit" value="Send Message"></input>
            </div>

          </div>
        </div>
      </div>
    </div>




  )
};

export default Post;