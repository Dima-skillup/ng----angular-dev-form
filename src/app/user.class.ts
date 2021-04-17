export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public dateOfBirth: string,
    public frameworks: string,
    public frameworkVersions: string,
    public hobby: string
  ) { }
}
