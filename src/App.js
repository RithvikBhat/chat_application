import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="29ca6230-20d1-46e8-8789-109649c252a1"
            userName="erenjaegar"
            // Password
            userSecret="erenjaegar"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    )
}

export default App;