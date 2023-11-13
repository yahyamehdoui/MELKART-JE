import Image from 'next/image'
import Card from './NotreEquipe/Card';
import styles from './globals.css';

export default function Home() {
  return (
    <div className="container">
      <h1>Notre Equipe</h1>
      <Card
        image="/1.png" 
        name="name" 
        title="title"
        facebook="https://www.facebook.com"
        linkedin="https://www.linkedin.com" 
        email="exemple@example.com" 
      />
    </div>

  )
}
