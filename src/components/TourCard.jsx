const TourCard = (prop) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={prop.image} className="tour-img" alt="" />
        <p className="tour-date">{prop.date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{prop.title}</h4>
        </div>
        <p>{prop.info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fa-solid fa-map"></i>
            </span>
            {prop.location}
          </p>
          <p>{prop.duration} Days</p>
          <p>From ${prop.cost}</p>
        </div>
      </div>
    </article>
  );
};

export default TourCard;
