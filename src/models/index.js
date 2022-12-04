// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PORTFOLIOLAPTOP, PORTFOLIOPHONE, INTROes, NAVBAR, SERVICES, EXPERIENCE, WORKS, PORTFOLIO, TESTIMONIALS, CONTACT, FOOTER } = initSchema(schema);

export {
  PORTFOLIOLAPTOP,
  PORTFOLIOPHONE,
  INTROes,
  NAVBAR,
  SERVICES,
  EXPERIENCE,
  WORKS,
  PORTFOLIO,
  TESTIMONIALS,
  CONTACT,
  FOOTER
};