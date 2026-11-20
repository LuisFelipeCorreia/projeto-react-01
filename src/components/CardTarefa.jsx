export default function CardTarefa({ tarefa, onAlternar, onRemover }) {
  return (
    <article className={`card-tarefa ${tarefa.concluida ? 'feita' : ''}`}>
      <div className="card-info">
        <div className="tags">
          <span className="tag-cat">{tarefa.categoria}</span>
          <span className={`tag-prio prio-${tarefa.prioridade.toLowerCase()}`}>
            {tarefa.prioridade}
          </span>
        </div>
        <h3>{tarefa.titulo}</h3>
      </div>

      <div className="card-acoes">
        <button
          type="button"
          className="btn-check"
          onClick={() => onAlternar(tarefa.id)}
        >
          {tarefa.concluida ? '↩ Reabrir' : '✓ Concluir'}
        </button>
        <button
          type="button"
          className="btn-del"
          onClick={() => onRemover(tarefa.id)}
        >
          🗑️
        </button>
      </div>
    </article>
  )
}