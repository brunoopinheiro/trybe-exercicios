class Friend {
  private nickname: string = '';

  public getNickname(): string {
    return this.nickname;
  }

  public setNickname(nickname: string) {
    this.nickname = nickname;
  }
}

class SocialMedia {
  private friends = new Array<Friend>();

  public addFriend(friend: Friend) {
    this.friends.push(friend);
  }

  public printFriends() {
    this.friends.map((friend) => console.log(friend));
  }
}

const socAcc = new SocialMedia();

const friendTribiani = new Friend();
friendTribiani.setNickname('Joey');

const friendRoss = new Friend();
friendRoss.setNickname('Boring');

socAcc.addFriend(friendTribiani);
socAcc.addFriend(friendRoss);
socAcc.printFriends();