import React from 'react'

export const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Finde a user'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/6908488/pexels-photo-6908488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="userChatInfo">
          <span>Jhane</span>
        </div>
      </div>
    </div>
  )
}
