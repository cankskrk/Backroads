import Title from './Title';

import TourCard from './TourCard';
import { tours } from '../data';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subtitle="Tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            image={tour.image}
            date={tour.date}
            title={tour.title}
            info={tour.info}
            location={tour.location}
            duration={tour.duration}
            cost={tour.cost}
          />
        ))}
      </div>
    </section>
  );
};

export default Tours;
