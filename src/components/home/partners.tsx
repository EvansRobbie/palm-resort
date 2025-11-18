import { DATA } from '@/_data/data';
import BrandingSection from './brands';

const PartnersSection = () => {
  return (
    <section className='py-16 '>
      <div className='flex flex-col px-4 gap-2 md:gap-4 items-center'>
        <h2 className='font-serif font-medium text-4xl md:text-6xl justify-center md:justify-start'>
          Our Trusted Partners
        </h2>
        <p className='text-base font-serif  text-center max-w-180'>
          We collaborate with Kenya&apos;s leading brands to deliver exceptional
          experiences and seamless services to our valued clients.
        </p>
      </div>
      <BrandingSection brandItems={DATA.partners} />
    </section>
  );
};

export default PartnersSection;
