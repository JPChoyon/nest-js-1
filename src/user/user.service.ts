import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  allUsers: {
    id: number;
    name: string;
  }[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
  getUsers() {
    return this.allUsers;
  }
  getOneUser(id: number) {
    return this.allUsers.find((user) => user.id === id);
  }
}
