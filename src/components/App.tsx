import { posts } from '../data/posts'
import Card from './Card'
import '../assets/styles/index.css'

function App() {

  return (
    <div className="candy-app">
      <div className="candy-container">
        <h1 className="candy-heading">CANDY BLOG!</h1>
        <p className="candy-subtitle">
          Sweet stories, colorful ideas & delicious posts!
        </p>

        <div className="candy-grid">
          {posts.map((post) => {
            return (
              <Card
                key={post.id}
                title={post.title}
                content={post.content}
                category={post.category}
                author={post.author}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
