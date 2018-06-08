export default class extends React.Component {
  state = {
    chatMessages: null,
  }

  fetchChatMessages = () => {
    fetch('http://127.0.0.1:5000/chat')
      .then((data) => data.json())
      .then((chatMessages) => this.setState({ chatMessages }))
  }

  componentDidMount() {
    this.fetchChatMessages()
    this._timer = setInterval(this.fetchChatMessages, 1000)
  }

  componentWillUnmount() {
    clearInterval(this._timer)
  }

  render() {
    if (this.state.chatMessages === null) {
      return <div>Chat messages are still loading...</div>
    }
    return (
      <>
        <ul>
          <style jsx>{`
            .username {
              font-weight: bold;
              margin-right: 0.5em;
            }
            .message {
              font-style: italic;
            }
          `}</style>
          {this.state.chatMessages.map(
            (chatMessage) => (
              <li>
                <span className="username">{`<${chatMessage.username}>`}</span>
                <span className="message">{chatMessage.message}</span>
              </li>
            )
          )}
        </ul>
      </>
    )
  }
}
