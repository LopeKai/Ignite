import { Header } from "./components/Header"
import { Sidebar } from './components/Sidebar'
import { Post } from "./components/Post"

import styles from './App.module.css'
import './global.css'

const post = [

  { 
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lopekai.png',
      name: "Kaique Lopes",
      role: "Dev Front End"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: "Mayk Brito",
      role: "Educator @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-01-01 22:30:22')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: "Diego Fernandes",
      role: "Ceo @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-07-09 12:20:23')
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            post.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
          
        </main>
      </div>
    </div>
  )
}

export default App
