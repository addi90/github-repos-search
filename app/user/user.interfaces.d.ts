declare module user {
  export interface IUserService {
    getUserRepos: (userName: string) => any;
  }
}