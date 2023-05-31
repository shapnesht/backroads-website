import Title from './Title'
import { services } from '../data'
import Service from './Service'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id } = service
          return <Service key={id} {...service} />
        })}
      </div>
    </section>
  )
}
export default Services
