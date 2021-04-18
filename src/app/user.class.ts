export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public dateOfBirth: string,
    public framework: string[],
    public frameworkVersion: string,
    public hobby: string[]
  ) { }
}
