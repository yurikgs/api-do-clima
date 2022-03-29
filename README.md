![image](https://user-images.githubusercontent.com/38916533/160609857-1815e0b4-68e1-4430-954d-8f628f1680b6.png)


<p align="center">
  <h1>API do Clima</h1>
</p>
[Acesse este documento no GitHub, por aqui](https://github.com/yurikgs/api-do-clima/edit/main/README.md)

## Descrição


> Descubra como está o clima de uma cidade apenas inserindo o nome dela na url!


## Como rodar e usar a API

 - Antes de mais nada certifique-se de ter o node, o npm e o nest cli instalados em sua máquina
 - Abra o terminal na pasta raiz da aplicação,  e instale todas as dependencias necessárias: ```npm i```
 - Depois de tudo instalado, execute, no terminal, ainda na pasta raiz, nest start
 - No seu navegador, acesse o endpoint abaixo, trocando "sua cidade" pelo nome da cidade desejada:

```bash
localhost:3000:/tempo/sua cidade
```

<br>

 - Você receberá, na tela de seu navegador, as informações de clima referentes à cidade que você escolheu.
 
 ![image](https://user-images.githubusercontent.com/38916533/160614565-a7e4f321-8b55-4f65-9771-28e809b9464e.png)
 
<br>

## Documentação/Testes

 - Para acessar a documentação no insomnia, acesse a pasta ```docs/documentacao_insomnia``` e abra o arquivo .yalm pelo seu cliente insomnia.
 - NOTA: Deixei 2 endpoints configurados, um retorna uma string na tela do navegador, e um segundo um objeto. Esse último para a possibilidade de a API ser acessada por um frontend. Para acessar esse endpoint, basta adicionar "/objeto" após a url base do endpoint anterior, e antes do parâmetro:

 ![image](https://user-images.githubusercontent.com/38916533/160620872-958855ec-14ec-45d1-829c-93120c0a1219.png)

 
 ![image](https://user-images.githubusercontent.com/38916533/160620172-9fb6e544-945d-45d4-a701-3674194c0908.png)

<br>

## Teste Técnico:

### Quanto tempo você usou para completar a solução apresentada? O que você faria se tivesse mais tempo?

 > Tempo total: Pesquisa/Leitura da documentação Openweather, elaboração da lógica da solução - 2,5 horas / Código: 50 min / Documentação Markdown + testes 1h/ Revisões de Código + Validações 1h20min
 > Com + tempo: Inteface gráfica(Front End) + Documentação no Swagger

### Se usou algum framework, qual foi o motivo de ter usado este? Caso contrário, por que não utilizou nenhum?

 > Framework: Nestjs. Motivo: A estrutura pré pronta do framework previne erros de código, bem como agiliza muito a codificação em vários aspectos, como por exemplo ao gerar resources/cruds.


## Fale comigo :)

 <div>
 <sub><b>💻 Yuri Silva 💻<br> <i>Web Developer</i></b></sub></a> <a href="https://www.linkedin.com/in/yuri-silva-09539713a/" title="YuriSilva"></a>
 <br><br>
	<a href="https://www.linkedin.com/in/yuri-silva-09539713a/"> Linkedin <img src="https://www.linkedin.com/in/yuri-silva-09539713a/"></a>
 <div>

