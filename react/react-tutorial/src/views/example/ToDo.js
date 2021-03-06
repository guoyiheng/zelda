import React from 'react'
import style from './ToDo.module.scss'

class ToDo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [], text: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit} className={style.mForm}>
          {' '}
          <label htmlFor='new-todo'>What needs to be done?</label>{' '}
          <input id='new-todo' onChange={this.handleChange} value={this.state.text} />{' '}
          <button>Add #{this.state.items.length + 1}</button>
        </form>
        <img
          src='https://img.binfenyingyu.com/dub_cover_1548061551274'
          alt=''
          className={style.mImg}
        />
        <div className={`${style.m1px}`}></div>
        <div className={`${style.m1px2} .hairlines`}></div>
        <div className={`${style.mExample} `}></div>
      </div>
    )
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.text.length === 0) {
      return
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    }
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: '',
    }))
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
}
export default ToDo
