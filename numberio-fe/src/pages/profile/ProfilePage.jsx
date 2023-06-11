import React from "react";
import './ProfilePage.css'
function ProfilePage() {
    // Mock data to represent user's game history
    const user = {
      username: 'Lạt Đê',
      email: 'tiendatle@gmail.com',
      firstName: 'Lê',
      lastName: 'Tiến Đạt',
      joinDate: '2022-05-23'
    }

    const gameHistory = [
      {
        id: 1,
        game: 'Đậu xe',
        difficulty: 'Khó',
        timePlayed: '2023-05-01T09:00:00Z',
        score: 95,
      },
      {
        id: 2,
        game: 'Đá banh',
        difficulty: 'Vừa',
        timePlayed: '2023-06-15T14:30:00Z',
        score: 100,
      },
      {
        game: 'Rắn săn mồi',
        difficulty: 'Dễ',
        timePlayed: '2023-08-27T19:45:00Z',
        score: 80,
      },
    ];    
    // End of mock data
    const formatTime = (timeString) => {
      const dateObject = new Date(timeString);
      return dateObject.toLocaleDateString();
    };

    return (
      <div class="body">
      <div class="wrapper">
      <div class="left">
          <img src="https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg" alt="user" width="100"/>
          <h4>{user.username}</h4>
           <p>Gia nhập từ: </p>
           <p>{formatTime(user.joinDate)}</p>

      </div>
      <div class="right">
          <div class="info">
              <h3>THÔNG TIN CÁ NHÂN</h3>
              <div class="info_data">
                   <div class="data">
                      <h4>Họ và Tên</h4>
                      <p>{user.firstName +' '+ user.lastName}</p>
                   </div>
                   <div class="data">
                     <h4>Email</h4>
                      <p>{user.email}</p>
                </div>
              </div>
          </div>
        
        <div class="gamehistories">
              <h3>LỊCH SỬ CHƠI GAME</h3>
              <div class="gamecontainer">
        {gameHistory.map((item) => (
          <div key={item.id} class="game-box">
            <div className="left-side">
              <h4> Tên game: {item.game}</h4>
              <p>Độ khó: {item.difficulty}</p>
              <p>Chơi vào: {formatTime(item.timePlayed)}</p>
            </div>
            <div className="right-side">
              <p>{item.score} điểm</p>
            </div>
          </div>
        ))}
      </div>
    
        </div>        
      </div>
    </div>
  </div>
  );
  };


export default ProfilePage;


