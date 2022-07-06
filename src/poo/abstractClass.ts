export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  attack(personagem: Personagem): void {
    this.say();
    console.log(`${this.nome} atacou!`);
    personagem.lostLife(this.ataque);
  }
  lostLife(attackStrength: number): void {
    this.vida -= attackStrength;
    console.log(
      `${this.emoji} ${this.nome} perdeu ${attackStrength} de vida. Agora tem ${this.vida} de vida.`,
    );
  }

  abstract say(): void;
}

class Surskit extends Personagem {
  protected emoji = '🐛';

  say(): void {
    console.log(`-> ${this.nome} ${this.emoji} atacarrrrr <-`);
  }
}
class Magikarp extends Personagem {
  protected emoji = '🐳';
  say(): void {
    console.log(`-> ${this.nome} ${this.emoji} atacarrrrrrrrr <-`);
  }
}

const surskit = new Surskit('Surskit', 100, 1337);
const magikarp = new Magikarp('Magikarp', 100, 1000);

surskit.attack(magikarp);
magikarp.attack(surskit);
