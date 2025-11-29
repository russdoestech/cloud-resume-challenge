import { useState } from 'react'
import Header from 'components/Header'
import ResumePage from 'pages/ResumePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className="content_wrap">
        <div className="content">
          <article>
            <ResumePage></ResumePage>
          </article>
        </div>
      </div>
    </>
  )
}

export default App
