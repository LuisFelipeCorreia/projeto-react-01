export default function FiltroBar({ busca, onBuscaChange, filtroStatus, onFiltroStatusChange }) {
  return (
    <div className="filtro-bar">
      <input
        type="text"
        placeholder="🔍 Filtrar tarefas pelo nome..."
        value={busca}
        onChange={(e) => onBuscaChange(e.target.value)}
      />
      <div className="botoes-filtro">
        {['Todas', 'Pendentes', 'Concluídas'].map((status) => (
          <button
            key={status}
            type="button"
            className={filtroStatus === status ? 'ativo' : ''}
            onClick={() => onFiltroStatusChange(status)}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  )
}