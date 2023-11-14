import Header from './components/Header'
//import Test from './components/Test'
import FeedbackList from './components/FeedbackList';
import Card from './components/shared/Card';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  
  return (
    <FeedbackProvider>
      <>
        <Header bgColor='grey' text='Props Says Hello'/>
        {/*<Test />*/}
        <div className="container">
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
          <Card>Hello World</Card>
        </div>
        
      </>
    </FeedbackProvider>
  )
}

export default App
