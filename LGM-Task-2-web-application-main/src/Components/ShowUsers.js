import React from 'react';
export default function showUsers({users,loadUsers, Loading}){
    console.log(typeof(users))
    return(
        <>
            <nav id="main-navbar">
              <ul>
                <img src='https://letsgrowmore.in/wp-content/uploads/2021/05/Artboard-1-1-removebg-preview-e1645900071758.jpg' href="https://letsgrowmore.in/"/>
                <button onClick={loadUsers} className="btn"><span>Get Users</span></button>
              </ul>
            </nav>
            <div className='snail'>
                <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340" className={Loading?"loading":"unloading"}/>
            </div>
            <div>
            {
                users.map((u)=>(
                    <div key={u.id} className="card">
                        <div className='avator'><img src={u["avatar"]}/></div>
                        <div className='content'>
                            <div className='name'><b>ID : </b>{u["id"]}</div>
                            <div className='name'><b>E-mail : </b>{u["email"]}</div> 
                            <div className='name'><b>First Name : </b>{u["first_name"]}</div>
                            <div className='name'><b>Last Name : </b>{u["last_name"]}</div> 
                        </div>
                    </div>
                ))
            }
            </div>
        </>
    )
}