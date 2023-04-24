import './App.css'
import { Layout } from './components/Layouts/Layout.jsx'
import { RoutesRoot } from './routing/RoutesRoot.jsx'

function App() {
  return (
    <div className='App'>
      <Layout>
        <RoutesRoot />
      </Layout>
    </div>
  )
}

export default App
