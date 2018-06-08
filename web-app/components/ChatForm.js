export default class extends React.Component {
  state = {
    username: '',
    message: '',
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value })
  }

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value })
  }

  sendMessage = (event) => {
    event.preventDefault()
    if (this.state.message === '') {
      return
    }
    const chatMessage = new FormData()
    chatMessage.append('username', this.state.username)
    chatMessage.append('message', this.state.message)
    fetch('http://127.0.0.1:5000/chat', { method: 'POST', body: chatMessage })
    this.setState({ message: '' })
  }

  render() {
    return (
      <>
        <form onSubmit={this.sendMessage}>
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          <input type="text" value={this.state.message} onChange={this.handleMessageChange} />
          <button>Send</button>
        </form>
      </>
    )
  }
}
