import './index.css';
import '../../assets/css/grid.css'
import data from '../data'

function Day2() {
  const profile = data.profile;
  return (
    <>
    <div className="day2 grid wide">
      <div className="row">
        {profile.map( (e) => (
      <div key={`${e.avatar}${e.index}`}  className="profile col l-4 m-6 c-12">
        <div className="profile__avatar">
          <img src={e.avatar} alt={e.name}/>
        </div>
        <div className="profile__job">{e.job}</div>
        <div className="profile__social">
        {e.social.map(social => (
          <a key={`${social}${e.index}`} href={`https://www.${social}.com/${e.name}`}>
            <i className={`fab fa-${social}`}></i>
          </a>
        ))}
        </div>
        <button className="profile__contact">Contact Me</button>
      </div>
      ))}
      </div>
    </div>
    </>
  );
}

export default Day2;