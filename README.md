# pdf-creator

## Funcionamento

Este programa se inicia solicitando o termo que deve ser pesquisado em [Wikipedia.org do Brasil](https://pt.wikipedia.org). Após isso se iniciará o processo de web scraping que será feito usando a biblioteca [**puppeteer**](https://www.npmjs.com/package/puppeteer). Porém, o web scraping, nesse caso, apenas servirá para fazer uma espécie de autenticação para saber se o termo que foi pesquisado existe na Wikipedia. 

Se caso não existir, ele retornará o valor _undefined_, caso contrário ele retornará o texto do cabeçalho principal da página. Após fazer esta autenticação, caso exista o termo no site, ele fará uma requisição à uma API que retornará um resumo do texto. Em seguida é feito um tratamento no resumo retornado que criará um array que tem o resumo separado em sentenças. Após esse tratamento, é usado o método `renderFile()` da biblioteca **EJS**, que é um view engine Javascript. No dietório `src/template` existe o arquivo `index.ejs` que possui a base do HTML que será renderizado. Quando o método `renderFile()` é finalizado ele retorna uma variavel que contém o HTML gerado. E após ser retornado o HTML, será usado a biblioteca **html-pdf** para gerar o PDF do HTML que foi retornado. o PDF ficará salvado no diretório `src/pdfs` com o nome do termo que foi pesquisado.

## Estrutura

O programa é divido em funções que ficam no diretório `src/functions`. A primeira função executada é a `searchInWikipedia()` que fará a autenticação e o retorno o cabeçalho. Em seguida é executada a função `textSummarize` que fará a chamada para API que retorna o resumo do texto. Depois é executada a função `htmlGenerate()` que retornará o HTML e e no final a função que cria o PDF.

## Avisos

1. O input que é feito no início do programa não aceita carateres especiais. Então não é possível fazer certas pesquisas no Wikipedia do brasil em que as palavras precisam acento.
2. A API que é feita a requisição para gerar o resumo precisa de uma API KEY que não foi upada para que minha API KEY não fosse usada por vocês. Caso queiram usar, gerem sua API KEY no site da API que é o site [smmry.com](https://smmry.com/). A Geração da API KEY é gratuita e você pode fazer até 100 requisições por dia. Você também pode gerar uma API KEY paga. O programa irá solicitar sua API KEY na primeira vez que você executá-lo.

## Project setup

### Iniciar a execução do programa

```
$ npm start
```
