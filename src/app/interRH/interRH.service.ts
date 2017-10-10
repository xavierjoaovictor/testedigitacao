import { Injectable } from '@angular/core';

@Injectable()
export class InterRHService {
  constructor() {}

  getBaseText(){
      return 'Ao longo de 23 anos, crescemos e alcançamos inúmeras conquistas com o nome Intermedium. Nessa trajetória, mudamos muito: de financeira para banco, \
          de regional para nacional, de crédito para serviços múltiplos. A partir de 2017, adotamos um novo nome e uma nova marca: Banco Inter; uma mudança que reflete \
          a evolução do nosso negócio e do mercado no qual atuamos. \
          Ainda como Intermedium, fomos o primeiro banco 100% digital do país e o único a oferecer conta corrente digital totalmente isenta de tarifas, integrada a uma \
          completa plataforma de serviços financeiros. E como Banco Inter, vamos fazer muito mais. Nosso propósito é democratizar o acesso bancário no Brasil, fazendo da\
           relação com os clientes uma parceria onde todos ganham e cada experiência é simples, segura e transparente.'
  }
}