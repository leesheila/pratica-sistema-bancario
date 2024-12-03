let contaController = new ContaController();
let clienteController = new ClienteController();
contaController.listar();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
// Prática - Sistema Bancário
const clientes = new Clientes();
const c2 = new Conta('2', 200);
const c3 = new Conta('3', 300);
const cliente1 = new Cliente("pedro", "111.111.111-11"); //m
const cliente2 = new Cliente("joao", "222.222.222-22"); //d
const cliente3 = new Cliente("maria", "333.333.333-33"); //a
clientes.inserir(cliente1);
clientes.inserir(cliente2);
clientes.inserir(cliente3);
console.log('\nLista de Clientes: ');
console.log(clientes.listar());
console.log('\nRemovendo cliente joao: ');
clientes.remover('222.222.222-22');
console.log(clientes.listar());
console.log('\nPesquisando pelo cpf 111.111.111-11');
console.log(clientes.pesquisar('111.111.111-11'));
