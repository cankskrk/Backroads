const PageLink = (prop) => {
  return (
    <li key={prop.id}>
      <a className="nav-link" href={prop.href}>
        {prop.text}
      </a>
    </li>
  );
};

export default PageLink;
