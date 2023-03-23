import CepService from "./CepService";
import FooCepApi from "./FooCepAPI";

async function main() {
  const cepApi = new FooCepApi();
  const cepSvc = new CepService(cepApi);

  console.log(
    'get address by cep',
    '->',
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address',
    '->',
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

main();