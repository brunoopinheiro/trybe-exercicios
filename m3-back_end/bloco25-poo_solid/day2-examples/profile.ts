class Profile {
  private name: string;
  private email: string;

  constructor() {
    this.name = '';
    this.email = '';
  }

  public setName(name: string) {
    this.name = name;
  }

  public setEmail(email:string) {
    this.email = email;
  }

  public toString(): string {
    return `name - [${this.name}] - email - [${this.email}]`;
  }
}

class SocialMediaAccount {
  private profile = new Profile();

  public editProfile(name: string, email: string) {
    this.profile.setName(name);
    this.profile.setEmail(email);
  }

  public printProfile() {
    console.log(this.profile.toString());
  }
}

const socialMediaAccount = new SocialMediaAccount();
socialMediaAccount.editProfile('Manuella', 'manu@trybe.com');
socialMediaAccount.printProfile();