const Title = (prop) => {
  return (
    <div className="section-title">
      <h2>
        {prop.title} <span>{prop.subtitle}</span>
      </h2>
    </div>
  );
};

export default Title;
