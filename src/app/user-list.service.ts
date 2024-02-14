import { Injectable } from "@angular/core";


export interface User {
  id: number;
  password: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserListeService {

  private users: User[] = [
    {
      id:1,
      username:'admin',
      password:'1234',
    },
    {
      id:2,
      username:'admin',
      password:'1234',
    },
    {
      id:3,
      username:'admin',
      password:'1234',
    },
    {
      id:4,
      username:'admin',
      password:'1234',
    },
  ];

}
