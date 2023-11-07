import styles from './CastMember.module.css';

export const CastMember = ({ actor }) => {
  const imgPath = actor.profile_path
    ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
    : 'https://i0.wp.com/florrycreativecare.com/wp-content/uploads/2020/08/blank-profile-picture-mystery-man-avatar-973460.jpg?fit=1280%2C1280&ssl=1';
  return (
    <li className={styles.Item}>
      <div className={styles.Image}>
        <img
          src={imgPath}
          className={styles.Image}
          width="100%"
          alt={`${actor.name}`}
        />
      </div>
      <div className={styles.CharacterDiv}>
        <span className={styles.Name}>{actor.name}</span>
        <span className={styles.CharacterTitle}>as</span>
        <span className={styles.Character}>{actor.character}</span>
      </div>
    </li>
  );
};
