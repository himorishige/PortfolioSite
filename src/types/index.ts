type Tag = {
  id: string;
  workId: string;
  name: string;
  color?: string;
  bgColor?: string;
};

type Table = {
  id: string;
  workId: string;
  name: string;
  body: string;
  sort?: number;
};

export type Work = {
  id: string;
  title: string;
  image: string;
  tag?: { items: Tag[] };
  body: string;
  table?: { items: Table[] };
  sort?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type ContactForm = {
  name: string;
  email: string;
  message: string;
};
