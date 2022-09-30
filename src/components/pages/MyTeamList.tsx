import React, { useState, useEffect } from 'react'
import { SearchPlayer } from '../organism/SearchPlayer'
import { CardsPlayer } from '../organism/CardsPlayer'
import { ModalDeletePlayer } from '../organism/ModalDeletePlayer'
import './../../styles/index.css'
import { MyTeamForm } from '../templates/MyTeamForm'
import {
  createPlayer,
  deleteByIdPlayer,
  getPlayerById,
  getPlayers,
  updateByIdPlayer
} from '../../api/players'

export const MyTeamList = () => {
  const [players, setPlayers] = useState([])
  const [tablaPlayers, setTablaPlayers] = useState<any[]>([])
  const [modal, setOpenModal] = useState(false)
  const [modalDelete, setOpenModalDelete] = useState(false)
  const [idPlayer, setIdPlayer] = useState(null)
  const [idPlayerDelete, setIdPlayerDelete] = useState(null)
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [position, setPosition] = useState('')
  const [image, setImage] = useState('')
  const [ataque, setAtaque] = useState(0)
  const [defensa, setDefensa] = useState(0)
  const [skills, setSkills] = useState(0)
  const [message, setMessage] = useState('')
  const [messageNoPlayers, setMessageNoPlayers] = useState('')
  const [busqueda, setBusqueda] = useState('')
  const [pagina, setPagina] = useState(1)
  const [porPagina, setPorPagina] = useState(5)

  const filtrar = (terminoBusqueda: string) => {
    tablaPlayers.filter((elemento) => {
      //console.log(elemento.attack.toString().includes(terminoBusqueda));
      if (
        elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        elemento.attack.toString().includes(terminoBusqueda) ||
        elemento.defense.toString().includes(terminoBusqueda)
      ) {
        return elemento
      }
      setMessageNoPlayers('No se encontraron jugadores')
      return ''
    })
    //setPlayers(resultadoBusqueda);
  }

  const handleChange = (e: any) => {
    //console.log(e.target.value);
    setBusqueda(e.target.value)
    filtrar(e.target.value)
  }

  const limpiarCampos = () => {
    setIdPlayer(null)
    setIdPlayerDelete(null)
    setName('')
    setLastname('')
    setPosition('')
    setImage('')
    setAtaque(0)
    setDefensa(0)
    setSkills(0)
  }

  const cargarDatos = async () => {
    const resultado = await getPlayers()
    setPlayers(resultado)
    setTablaPlayers(resultado)
    setPorPagina(5)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const objPlayer = {
      firstName: name,
      lastName: lastname,
      position,
      image,
      attack: ataque,
      defense: defensa,
      skills: skills,
      type: 'normal',
      idAuthor: 43,
      hp: 0,
      created_at: new Date(),
      updated_at: new Date()
    }
    createPlayer({ objPlayer, setMessage, cargarDatos, limpiarCampos, setOpenModal, modal })
  }

  const cargarPlayerPorId = async (id: number) => {
    const resultado = await getPlayerById(id)
    if (resultado.name !== '') {
      setName(resultado.name)
    }
    if (resultado.image !== '') {
      setImage(resultado.image)
    }
    if (resultado.lastname !== '') {
      setName(resultado.lastname)
    }
    if (resultado.position !== '') {
      setName(resultado.position)
    }
    if (resultado.attack !== '') {
      setAtaque(resultado.attack)
    }
    if (resultado.defense !== '') {
      setDefensa(resultado.defense)
    }
    if (resultado.skills !== '') {
      setDefensa(resultado.skills)
    }
  }

  const updatePlayerById = async (e: any) => {
    e.preventDefault()
    const objPlayer = {
      name,
      lastname,
      image,
      position,
      attack: ataque,
      defense: defensa,
      skills: skills,
      updated_at: new Date()
    }
    updateByIdPlayer({
      idPlayer,
      objPlayer,
      setMessage,
      cargarDatos,
      limpiarCampos,
      setOpenModal,
      modal
    })
  }

  const deletePlayerById = async (id: any) => {
    await deleteByIdPlayer(id)
    setMessage('Jugador Eliminado con éxito')
    setTimeout(() => {
      setOpenModalDelete(!modalDelete)
    }, 1500)
    cargarDatos()
  }

  const toggle = () => {
    setOpenModal(!modal)
    setIdPlayer(null)
    setIdPlayerDelete(null)
    limpiarCampos()
    setMessage('')
  }

  const togglEdit = (id: any) => {
    cargarPlayerPorId(id)
    setIdPlayer(id)
    setIdPlayerDelete(null)
    setOpenModal(!modal)
    setMessage('')
  }

  const toggleClose = () => {
    setOpenModalDelete(!modalDelete)
  }

  const toggleDelete = (id: any) => {
    cargarPlayerPorId(id)
    setIdPlayerDelete(id)
    setIdPlayer(null)
    setOpenModalDelete(!modalDelete)
    setMessage('')
  }

  useEffect(() => {
    cargarDatos()
  }, [])

  return (
    <>
      <div className="container">
        <SearchPlayer busqueda={busqueda} handleChange={handleChange} />
        <div>
          <button onClick={toggle} className="buttonStyles">
            &nbsp; AGREGAR
          </button>
        </div>
        <CardsPlayer
          players={players}
          setPlayers={setPlayers}
          messageNoPlayers={messageNoPlayers}
          toggleDelete={toggleDelete}
          togglEdit={togglEdit}
        />
        {modal && (
          <MyTeamForm
            idPlayer={idPlayer}
            name={name}
            lastname={lastname}
            position={position}
            image={image}
            ataque={ataque}
            defensa={defensa}
            skills={skills}
            message={message}
            toggle={toggle}
            setName={setName}
            setLastname={setLastname}
            setPosition={setPosition}
            setAtaque={setAtaque}
            setImage={setImage}
            setDefensa={setDefensa}
            setSkills={setSkills}
            handleSubmit={handleSubmit}
            updatePlayerById={updatePlayerById}
            hp={''}
          />
        )}
        {modalDelete && (
          <ModalDeletePlayer
            name={name}
            message={message}
            idPlayerDelete={idPlayerDelete}
            toggleClose={toggleClose}
            deletePlayerById={deletePlayerById}
          />
        )}
      </div>
    </>
  )
}
