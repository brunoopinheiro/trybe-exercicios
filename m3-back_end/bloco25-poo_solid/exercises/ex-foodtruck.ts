// this is a code snippet
class Cliente {
  constructor (private _name: string) {}
}

class Item {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
      this._name = name;
      this._price = price;
  }

  get price() {
      return this._price;
  }

  get name() {
      return this._name;
  }
}

class Pedido {
  private _cliente: Cliente;
  private _itens: Item[];
  private _pagamento: 'cartão' | 'dinheiro';
  private _desconto: number;

  constructor(cliente: Cliente, pagamento: 'cartão' | 'dinheiro', desconto?: number) {
      this._cliente = cliente;
      this._pagamento = pagamento;
      this._desconto = desconto || 0;
      this._itens = [];
  }

  get totalPedido() {
      return this._itens.reduce((a, c) => a + c.price, 0);
  }

  get pedidoComDesconto() {
      const total = this.totalPedido;
      return total - (total * this._desconto);
  }
}