// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RESUME, MUSIC, PORTFOLIOLAPTOP, PORTFOLIOPHONE, INTROes, NAVBAR, SERVICES, EXPERIENCE, WORKS, PORTFOLIO, TESTIMONIALS, CONTACT, FOOTER } = initSchema(schema);

export {
  RESUME,
  MUSIC,
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