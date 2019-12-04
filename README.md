# Markdown Links

Biblioteca que lê e analisa arquivos no formato Markdown (.md) e verifica os links que possuem no arquivo.

## Instalação

Para usar esta biblioteca você deve ter instalado os NodeJs anteriormente no seu computador.

Então você deve executar o seguinte comando no terminal:

`npm install -g thamiresoliveiragomes/SAP003-md-links`


## CLI (Command Line Interface - Interfaz de Línea de Comando)

Esta aplicação pode ser executada através do terminal da seguinte maneira:

`md-links <path-to-file> `

```sh
$ md-links ./some/example.md
```

##### Valor de retorno

A função retorna uma promessa (Promise) com uma array de objetos, em que cada objeto representa um link no arquivo, e contém as seguintes propriedades:

- `href`: URL encontrada.
- `text`: Texto que aparece dentro do link.