import ChatMessages from '../components/ChatMessages'
import ChatForm from '../components/ChatForm'

export default class extends React.Component {
  render() {
    return (
      <>
        <h1>Chat!</h1>
        <ChatMessages />
        <ChatForm />
      </>
    )
  }
}
