export class Issue{
  url: string;
  comments_url: string;
  number: number;
  title: string;
  user: User;
  labels: Array<Label>;
  state: string;
  locked: boolean;
  comments: number;
  created_at: Date;
  updated_at: Date;
}

class User{
  login: string;
}

class Label{
  url: string;
  name: string;
  color: string;
}