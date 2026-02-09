export default function Contact() {
  const links = [
    {name:'Email', url:'mailto:elomarihachim@gmail.com'},
    {name:'LinkedIn', url:'https://www.linkedin.com/in/mohammed-hachim-elomari-929162250/'},
    {name:'GitHub', url:'https://github.com/Hachim-elomari'}
  ]
  return (
    <section id="contact" style={{padding:'4rem 1rem', textAlign:'center'}}>
      <h2 style={{color:'#2c3e50'}}>Contact</h2>
      <p>Get in touch!</p>
      {links.map(l => (
        <a key={l.name} href={l.url} target="_blank" style={{display:'inline-block', margin:'0.5rem', padding:'0.5rem 1rem', border:'1px solid #2c3e50', borderRadius:'5px'}}>{l.name}</a>
      ))}
      <footer style={{marginTop:'2rem', padding:'2rem 0', background:'#2c3e50', color:'white'}}>© 2026 Ton Nom</footer>
    </section>
  )
}