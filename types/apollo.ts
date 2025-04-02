import { ContactData } from './contact';

export interface ApolloQueryResult {
  data: {
    contacts: ContactData;
  };
}
