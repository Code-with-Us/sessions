var classes = {
  title: 'uk-card-title',
  input: 'uk-input uk-width-2-3 uk-margin-small-right',
  button: 'uk-button uk-button-default uk-button-small uk-border-rounded',
  card: 'uk-card-body',
  list: 'uk-list',
  todo: 'uk-card uk-card-secondary uk-width-1-3 uk-position-top-center uk-margin-large-top uk-box-shadow-xlarge'
}

var list = ['Learn React', 'Learn JSX', 'Put it all together', 'something else'];

var e = React.createElement;

var title = e('h1', { className: classes.title }, 'Todo List');
var input = e('input', {className: classes.input, placeholder: 'New Item'}, null)
var button = e('button', { className: classes.button }, 'Add');
var form = e('form', null, [input, button]);

function List(list) {
  return e('ul', { className: classes.list }, list.map(function (item, index) {
    return e('li', {key: index}, item)
  }))
}

var cardBody = e('div', {className: classes.card}, [title, form, List(list)])
var todoList = e('div', {className: classes.todo}, cardBody)

var ROOT = document.querySelector('#root');
ReactDOM.render(todoList, ROOT);