// Profile.js
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { user, setAuth, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("UserData");
    localStorage.removeItem("Auth");
    setAuth(false);
    setUser({});
    navigate('/');
  };

  return (
    <div className='box'>
      <img src='https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/85bbe9a7-230b-4836-bff3-d5f451b426a7.png'/>
      <div className="data-get-sec">
        {user && (
          <>
            <h3>Hi, Mr/Mrs :</h3>
            <p>Name: {user.fName} {user.lName}</p>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <p>Password: ************</p>
            <button onClick={handleLogout}>Log Out</button>
            <div className="help-sec">
              <p>Have trouble logging in?</p>
              <p><a href="">Get Help</a></p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
