import { Provider } from 'react-redux';
import { Header } from './components/Header';
import Form from './components/Form';
import { store } from './store';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <main className="bg-gray-950 p-24">
        <Header />
        <Form />
      </main>
    </Provider>
  )
}

export default App
