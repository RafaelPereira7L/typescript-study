const obj1: Record<string, string | number> = {
  name: 'Rafael',
  lastName: 'Pereira',
  age: 19,
};

console.log(obj1);

type PersonProtocol = {
  name?: string;
  lastName?: string;
  age?: number;
};

// REQUIRED
type PersonRequired = Required<PersonProtocol>;

// PARTIAL
type PersonPartial = Partial<PersonProtocol>;

// READONLY
type PersonReadonly = Readonly<PersonProtocol>;

// PICK
type PersonPick = Pick<PersonRequired, 'name' | 'lastName'>;

const obj2: PersonRequired = {
  name: 'Rafael',
  lastName: 'Pereira',
  age: 19,
};

console.log(obj2);

// EXTRACT and EXCLUDE
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  name: string;
  lastName: string;
  age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: '3vvrgvs1hxrxi73rektfvtx',
  name: 'Rafael',
  lastName: 'Pereira',
  age: 19,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

// MODULE MODE
export default 1;
