type VoteOption = {
  counter: number;
  option: string;
};

export class VoteApp {
  private _voteOptions: VoteOption[] = [];
  constructor(public question: string) {}

  addVoteOption(option: VoteOption): void {
    this._voteOptions.push(option);
  }
  vote(voteIndex: number): void {
    if (!this._voteOptions[voteIndex]) return;
    this._voteOptions[voteIndex].counter++;
  }

  get voteOptions(): VoteOption[] {
    return this._voteOptions;
  }
}

export class Langs {
  private votes: VoteApp[] = [];

  addVote(vote: VoteApp): void {
    this.votes.push(vote);
  }

  showVotes(): void {
    for (const vote of this.votes) {
      console.log(vote.question);
      for (const option of vote.voteOptions) {
        console.log(option.option + ': ' + option.counter);
      }
    }
  }
}
const vote = new VoteApp('What is your favorite programming language?');
vote.addVoteOption({ counter: 0, option: 'Java' });
vote.addVoteOption({ counter: 0, option: 'C#' });
vote.addVoteOption({ counter: 0, option: 'Ruby' });
vote.addVoteOption({ counter: 0, option: 'PHP' });
vote.addVoteOption({ counter: 0, option: 'Python' });
vote.addVoteOption({ counter: 0, option: 'TypeScript' });
vote.addVoteOption({ counter: 0, option: 'Rust' });
vote.vote(5);
vote.vote(5);
vote.vote(5);
vote.vote(5);
vote.vote(4);
vote.vote(4);
vote.vote(4);
vote.vote(4);
vote.vote(6);

const voteApp = new Langs();
voteApp.addVote(vote);
voteApp.showVotes();
