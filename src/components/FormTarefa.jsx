import { useState } from 'react'

export default function FormTarefa({ onAdicionar }) {
  const [titulo, setTitulo] = useState('')
  const [prioridade, setPrioridade] = useState('Média')
  const [categoria, setCategoria] = useState('Estudos')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!titulo.trim()) return

    onAdicionar({
      id: Date.now(),
      titulo: titulo.trim(),
      prioridade,
      categoria,
      concluida: false
    })

    setTitulo('')
    setPrioridade('Média')
  }

  return (
    <form className="form-tarefa" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descreva a nova tarefa..."
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="Estudos">Estudos</option>
        <option value="Projeto">Projeto</option>
        <option value="Revisão">Revisão</option>
      </select>
      <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
        <option value="Alta">Prioridade Alta</option>
        <option value="Média">Prioridade Média</option>
        <option value="Baixa">Prioridade Baixa</option>
      </select>
      <button type="submit">➕ Adicionar</button>
    </form>
  )
}