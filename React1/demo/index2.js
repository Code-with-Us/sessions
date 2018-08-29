const classes = {
  title: 'uk-card-title',
  input: 'uk-input uk-width-2-3 uk-margin-small-right',
  button: 'uk-button uk-button-default uk-button-small uk-border-rounded',
  card: 'uk-card-body',
  list: 'uk-list',
  todo: 'uk-card uk-card-secondary uk-width-1-3 uk-position-top-center uk-margin-large-top uk-box-shadow-xlarge'
}

function List(props) {
  const { list } = props;
  return (
    <ul className={classes.list}>
      {list.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
}


class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      list: ['Learn React', 'Learn JSX', 'Put it all together']
    }
  }


  render() {
    return (
      <div className={classes.todo} >
        <div className={classes.card} >
          <h1 className={classes.title} >Todo List</h1>
          <form>
            <input type="text" className={classes.input} placeholder='New Item' />
            <button className={classes.button}>Add</button>
          </form>
          <List list={this.state.list} />
        </div>
      </div>
    )
  }
}

const ROOT = document.querySelector('#root');
ReactDOM.render(<TodoList />, ROOT);
