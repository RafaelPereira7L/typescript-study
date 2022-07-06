// Singleton and Factory Method
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}
  connect(): void {
    console.log(
      `Connectando a db: ${this.host}, ${this.user}, ${this.password}`,
    );
  }
  static getDb(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instancia existente');
      return Database.database;
    }
    console.log('Criando instancia');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db = Database.getDb('localhost', 'root', '123456');
db.connect();

const db2 = Database.getDb('localhost', 'root', '123456');
db2.connect();

console.log(db === db2);
