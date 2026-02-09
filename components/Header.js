export default function Header() {
  return (
    <header style={{background:'#2c3e50', color:'white', textAlign:'center', padding:'2rem'}}>
      <h1>Mohammed Hachim ELOMARI</h1>
      <p>Computer Science Student | Web Developer</p>
      <div style={{marginTop:'1rem'}}>
        <a href="https://github.com/Hachim-elomari" target="_blank" style={linkStyle}>GitHub</a>
        <a href="CV.pdf" target="_blank" style={linkStyle}>Télécharger CV</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>
    </header>
  )
}

const linkStyle = {
  margin:'0.5rem', padding:'0.5rem 1rem', border:'1px solid white', borderRadius:'5px', color:'white', textDecoration:'none'
}