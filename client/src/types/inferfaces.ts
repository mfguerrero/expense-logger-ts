export interface IExpense {
  id: number;
  description: string;
  amount: number;
  date: string;
  comments: string;
}

export interface IUser {
  id: number;
  email: string;
  displayName: string;
}
