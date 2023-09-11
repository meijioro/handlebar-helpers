# Custom Handlebars Helpers

### `compare`

compare two values, with an operator.<br /> _note:_ if you don't pass an operator, it assumes `===` <br /> _note:_ this can be used as a block _or_ inline helper

#### Params

- `left` _(\*)_ left value
- `operator` _(string)_ to compare with
- `right` _(\*)_ right value
- `[options]` _(object)_

#### Types of operators

- `'==='`: strict equals
- `'=='`: equals
- `'!=='`: does not equal
- `'<'`: less than
- `'>'`: greater than
- `'<='`: less than or equal to
- `'>='`: greater than or equal to
- `typeof`: type of variable (string, number, boolean, etc)

**Returns** _(string)_ if inline, otherwise calls block functions

#### Example

```hbs
{{compare string 'hello'}}
//=> "true"

{{compare 10 '>' 5}}
//=> "true"

{{#if (compare 10 '>' 5)}}
  true
{{else}}
  false
{{/if}}
```

### `ifAll`

block helper for checking if ALL arguments passed in are truthy

**Returns** _(string)_ calls block functions

#### Example

```hbs
{{#ifAll foo bar baz}}
  all are truthy
{{else}}
  not all are truthy
{{/ifAll}}
```

### `ifAny`

block helper for checking if ANY arguments passed in are truthy

**Returns** _(string)_ calls block functions

#### Example

```hbs
{{#ifAny foo bar baz}}
  at least one is truthy
{{else}}
  none are truthy
{{/ifAny}}
```

### `ifNone`

block helper for checking if NO arguments passed in are truthy

**Returns** _(string)_ calls block functions

#### Example

```hbs
{{#ifNone foo bar baz}}
  all are falsy
{{else}}
  not all are falsy
{{/ifNone}}
```

### `add`

Return the product of a plus b

**Returns** _(number)_

#### Params

- `a` _(number)_
- `b` _(number)_

#### Example

```hbs
{{add 3 2}}
//=> 5
```

### `subtract`

Return the product of a minus b

**Returns** _(number)_

#### Params

- `a` _(number)_
- `b` _(number)_

#### Example

```hbs
{{subtract 3 2}}
//=> 1
```

### `multiply`

Return the product of a multiplied by b

**Returns** _(number)_

#### Params

- `a` _(number)_
- `b` _(number)_

#### Example

```hbs
{{multiply 10 10}}
//=> 100
```

### `divide`

Return the product of a divided by b

**Returns** _(number)_

#### Params

- `a` _(number)_
- `b` _(number)_

#### Example

```hbs
{{divide 100 4}}
//=> 25
```

### `times`

Block helper loops though a range

**Returns** _(string)_ calls block functions

#### Params

- `a` _(number)_

#### Example

```hbs
{{#times 3}}{{@index}} {{/times}}
//=> 0 1 2
```

### `times`

Block helper loops though a range

**Returns** _(string)_ calls block functions

#### Params

- `a` _(number)_

#### Example

```hbs
{{#times 3}}{{@index}} {{/times}}
//=> 0 1 2
```

### `multidata`

compare two values, with an operator.<br /> _note:_ if you don't pass an operator, it assumes `===` <br /> _note:_ this can be used as a block _or_ inline helper

#### Params

- `string`
- `position`

**Returns** _(string)_ value in position

#### Example

```hbs
{{multidata 'a|b|c|d' 2}}
//=> "c"

<cbn-field id='test' label='Size' type='select' default='14|word|gotta'>
  <cbn-option value='12|hello|nice'>12px</cbn-option>
  <cbn-option value='14|word|gotta'>14px</cbn-option>
  <cbn-option value='16|that|this'>16px</cbn-option>
</cbn-field>

{{multidata test 1}}
//=> "word"
```

### `includes`

check if substring exists

**Returns** _(boolean)_

#### Example

```hbs
{{includes 'helloWorld' 'hell'}}
//=> true
```

### `random_num`

creates random number

#### Params

- `max number range`

**Returns** _(number)_

#### Example

```hbs
{{random_num 10000}}
//=> a random number between 0 and 10000

{{random_num 100}}
//=> a random number between 0 and 100
```
