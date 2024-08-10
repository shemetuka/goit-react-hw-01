import PropTypes from "prop-types";
import css from "./profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.info}>
      <div className={css.infoProfile}>
        <img className={css.avatar} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.details}>@{tag}</p>
        <p className={css.details}>{location}</p>
      </div>
      <ul className={css.information}>
        <li className={css.listStat}>
          <span>Followers</span>
          <span className={css.number}>{stats.followers}</span>
        </li>
        <li className={css.listStat}>
          <span>Views</span>
          <span className={css.number}>{stats.views}</span>
        </li>
        <li className={css.listStat}>
          <span>Likes</span>
          <span className={css.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
