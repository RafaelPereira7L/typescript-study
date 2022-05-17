const clientData: [number, string] = [0, 'Nome'];
const clientData2: [number, string, string] = [0, 'Nome', 'Sobrenome'];
const clientData3: [number, string, string?] = [0, 'Nome'];
const clientData4: [number, string, ...string[]] = [0, 'Nome', 'Sobrenome'];

clientData[0] = 1;
clientData[1] = 'Rafael';
console.log(clientData);
console.log(clientData2);
console.log(clientData3);
console.log(clientData4);
