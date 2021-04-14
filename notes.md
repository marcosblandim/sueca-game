# sueca-game
Sueca card game for web.

## Planejamento

### V2
- será focada na estilização utilizando styled components
- estudar:
  - estrutura de arquivos
  - aprofundar em styled components
  - css (?)

## TODO
- estilização (v2)
  - colocar um titulo pra cada pagina
  - mostrar a carta passada em algum lugar (pequeno no canto)
  - mostrar a descricao "sobe demanda"
  - implementar mostrar pilha de discarte
  - mover (drag and drop) ruleLine
  - na lista de regras, deixar a standart fixa la em cima, e ultima criada logo embaixo (com a ordenacao decrescente no tempo; a mais nova la em cima)
  - avisar que regras vazia sao preenchidas com regras default
  - mudar o nome da aba para cada tela
  - continuar o jogo de onde parou; salvar sessão até as cartas acabarem (ai nao precisa salvar, pode reiniciar quando sair e voltar) ou o usuario reiniciar a sessao
  - fazer o efeito de varias cartas uma encima da outra na hora de jogar
  - pergunta de confirmação antes de mudar a regra selecionada
  - usar breadcrumb
  - implementar uma navbar
- v3
  - resolver os problemas causado pelos obbjetos de multi nivel (usar loadash)
    - isso causa o uso de shallow copies, que causa mutações inesperadas nos objetos, resultando em bugs dificeis de resolver

## DONE V2
  - colocar title e imagem na aba

## DONE V1
- se algum input for salvo vazio, preencher com regras defaults
- nao preencher ou apagar se nao tiver mudado nada desde a ultima acao correspondente
- perguntar antes de executar os botoes de fill, erase e add
- perguntar antes de deletar
- deletar, editar e ruleLine
- perguntar antes de editar
- extrair find rule pra utils
- extrair as strings defaultRuleName = 'standart', namespace e as LSKeys que sao usadas em mais de um lugar (nem todas, eu acho) para um js de string ou algo assim


## Features
- regras pra todas as cartas ou soh pro numero

## Geral
- classe Deck
    - getRandom
    - currCard
    - keepCurrCard (pode ser alterado antes ou durante o jogo?)
    - discardPile (?), pra ver quais cartas ja foram
- classe Rule
    - dá uma regra para cada carta
    - a regra tem um nome e uma descrição
- obejto card
    - number
    - suit
- o usuario pode criar, editar e deletar rules (menos a default)
- config screen
  - we'll have
    - one or more decks
    - a selected card *
    - an optional table to put cards (showing the top or botton) *
    - a discard pile
    * this might leave the app a bit less general

- share
    - conect with friends and share the same deck(s)

- pick/put:
    - top
    - bottom
    - middle
    - fromPosition (e.g. get card from index 2 )
    - fromFraction (get card in the position 2/3 of the deck)
    - random

- use/discard range
    - gets a subset of the deck (e.g. half, second 1/3, etc) and uses it in the place of the whole deck, or discards the subdeck

- custuom deck orders:
    - user can create, edit and delete custuom orders for the deck

- rules
    - states
        - selected rules
        - rules
    - rules:
        - name (id)
        - json with rules for each number
        - name: {rules}
    - form for creating new rules
    - list of created forms
        - can delete, select and edit a rule from buttons of the elments of this list
        - edit 
    - when creating, it will come filled with the standart rules
    - editing will be the same as creating, but it will come filled with its own data instead of the standart rule deck
