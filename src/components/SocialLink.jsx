const SocialLink = (prop) => {
  return (
    <li>
      <a href={prop.href}>
        <i className={prop.icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
