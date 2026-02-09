const skills = ['Java', 'SQL / MariaDB', 'OCaml', 'JavaScript', 'GitLab', 'VS Code']

export default function Skills() {
  return (
    <section id="skills" style={{padding:'4rem 1rem'}}>
      <h2 style={{textAlign:'center', color:'#2c3e50'}}>Skills</h2>
      <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'1rem'}}>
        {skills.map(skill => (
          <div key={skill} style={{background:'#ecf0f1', padding:'1rem 1.5rem', borderRadius:'5px'}}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}