import { User } from '../interfaces/user';

export class MyDataBaseClassic {
  static _instance: MyDataBaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDataBaseClassic {
    if (!MyDataBaseClassic._instance) {
      MyDataBaseClassic._instance = new MyDataBaseClassic();
    }

    return MyDataBaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log({ user });
    }
  }
}

export const myDataBaseClassic = MyDataBaseClassic.instance;
