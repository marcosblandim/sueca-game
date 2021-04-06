# sueca-game
Sueca card game for web.

## TODO

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
