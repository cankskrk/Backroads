const ServiceCard = (prop) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={prop.icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{prop.title}</h4>
        <p className="service-text">{prop.text}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
