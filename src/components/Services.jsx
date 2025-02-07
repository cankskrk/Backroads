import Title from './Title';
import ServiceCard from './ServiceCard';
import { services } from '../data';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subtitle="Services" />
      <div className="section-center services-center">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            text={service.text}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
