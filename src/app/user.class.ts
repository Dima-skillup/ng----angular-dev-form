export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public dateOfBirth: string,
    public frameworks: string,
    public frameworkVersion?: string,
    public hobby?: string
  ) { }
}
