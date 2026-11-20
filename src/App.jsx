import { useState, useEffect } from 'react'
import Header from './components/Header'
import FormTarefa from './components/FormTarefa'
import FiltroBar from './components/FiltroBar'
import CardTarefa from './components/CardTarefa'
import './App.css'

const TAREFAS_INICIAIS = [
  { id: 1, titulo: 'Estruturar componentes funcionais e Props', prioridade: 'Alta', categoria: 'Estudos', concluida: true },
  { id: 2, titulo: 'Implementar estado controlado nos formulários', prioridade: 'Média', categoria: 'Projeto', concluida: false },
  { id: 3, titulo: 'Persistir dados com useEffect e localStorage', prioridade: 'Baixa', categoria: 'Revisão', concluida: false }
]

export default function App() {
  const [tarefas, setTarefas] = useState(() => {
    const salvas = localStorage.getItem('taskflow_react_v1')
    return salvas ? JSON.parse(salvas) : TAREFAS_INICIAIS
  })
  const [busca, setBusca] = useState('')
  const [filtroStatus, setFiltroStatus] = useState('Todas')

  useEffect(() => {
    localStorage.setItem('taskflow_react_v1', JSON.stringify(tarefas))
  }, [tarefas])

  const adicionarTarefa = (nova) => {
    setTarefas((prev) => [nova, ...prev])
  }

  const alternarConclusao = (id) => {
    setTarefas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    )
  }

  const removerTarefa = (id) => {
    setTarefas((prev) => prev.filter((t) => t.id !== id))
  }

  const tarefasFiltradas = tarefas.filter((t) => {
    const bateBusca = t.titulo.toLowerCase().includes(busca.toLowerCase())
    const bateStatus =
      filtroStatus === 'Todas' ||
      (filtroStatus === 'Pendentes' && !t.concluida) ||
      (filtroStatus === 'Concluídas' && t.concluida)
    return bateBusca && bateStatus
  })

  const totalConcluidas = tarefas.filter((t) => t.concluida).length

  return (
    <div className="app">
      <Header total={tarefas.length} concluidas={totalConcluidas} />
      <FormTarefa onAdicionar={adicionarTarefa} />
      <FiltroBar
        busca={busca}
        onBuscaChange={setBusca}
        filtroStatus={filtroStatus}
        onFiltroStatusChange={setFiltroStatus}
      />

      <main className="lista">
        {tarefasFiltradas.length === 0 ? (
          <p className="vazio">Nenhuma tarefa encontrada para o filtro atual.</p>
        ) : (
          tarefasFiltradas.map((tarefa) => (
            <CardTarefa
              key={tarefa.id}
              tarefa={tarefa}
              onAlternar={alternarConclusao}
              onRemover={removerTarefa}
            />
          ))
        )}
      </main>
    </div>
  )
}