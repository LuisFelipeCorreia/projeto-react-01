export default function Header({ total, concluidas }) {
  const pendentes = total - concluidas

  return (
    <header className="topo">
      <div>
        <span className="badge">Aula 08 • Componentes, Props &amp; Hooks</span>
        <h1>TaskFlow React</h1>
        <p>Gerenciador de tarefas componentizado com persistência local.</p>
      </div>
      <div className="resumo-cards">
        <div className="stat">
          <span>Total</span>
          <strong>{total}</strong>
        </div>
        <div className="stat">
          <span>Pendentes</span>
          <strong className="amarelo">{pendentes}</strong>
        </div>
        <div className="stat">
          <span>Concluídas</span>
          <strong className="verde">{concluidas}</strong>
        </div>
      </div>
    </header>
  )
}