export interface Contact {
  title: string;
  description: string;
}

export interface Schema {
  schema: string;
}

export interface ContactData {
  contacts: Contact[];
  schemata: Schema[];
}

export interface ContactPageProps {
  contact: ContactData;
}
