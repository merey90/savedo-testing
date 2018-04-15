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
  milestone: Milestone;
}

class User{
  login: string;
  url: string;
}

class Label{
  url: string;
  name: string;
  color: string;
}

class Milestone{
  number: number;
  title: string;
}