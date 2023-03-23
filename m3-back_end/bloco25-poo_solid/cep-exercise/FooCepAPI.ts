import ICepAPI from "./ICepAPI";

class FooCepApi implements ICepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereco para o CEP: ${cep}, n:${number} e "endereco foo"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP para ${address}, n ${number} e "CEP baz"`;
  }
}

export default FooCepApi;