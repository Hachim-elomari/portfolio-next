const projects = [
  {
    name: 'Surf Competition Website',
    desc: 'Website to manage multiple competition editions.',
    tech: 'PHP, MariaDB, HTML/CSS',
    role: 'Database design + backend logic',
    link: 'https://github.com/Hachim-elomari'
  },
  {
    name: 'Portfolio Project',
    desc: 'My personal portfolio to showcase my projects and skills.',
    tech: 'HTML, CSS, JS',
    role: 'Full design + implementation',
    link: 'https://github.com/Hachim-elomari'
  }
]

export default function Projects() {
  return (
    <section id="projects" style={{padding:'4rem 1rem'}}>
      <h2 style={{textAlign:'center', color:'#2c3e50'}}>Projects</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1.5rem'}}>
        {projects.map(p => (
          <div key={p.name} style={{background:'white', padding:'1rem', borderRadius:'5px', boxShadow:'0 2px 5px rgba(0,0,0,0.1)'}}>
            <h3 style={{color:'#2c3e50'}}>{p.name}</h3>
            <p>{p.desc}</p>
            <p><b>Tech:</b> {p.tech}</p>
            <p><b>Role:</b> {p.role}</p>
            <a href={p.link} target="_blank" style={{color:'#3498db', fontWeight:'bold'}}>GitLab Link</a>
          </div>
        ))}
      </div>
    </section>
  )
}