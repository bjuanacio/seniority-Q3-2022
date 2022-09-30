export const getPlayers = async () => {
  let resultado
  try {
    const res = await fetch('https://api-exercise-q3.herokuapp.com/player', {
      method: 'GET',
      headers: {
        author: '43',
        'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS,PUT,DELETE',
        'access-allow-control-origin': '*'
      }
    })
    const resJson = await res.json()
    //console.log({ obtenerDatos: resJson });
    if (res.status === 200) {
      console.log('Jugadores obtenidos')
    } else {
      console.log('Ha ocurrido un error')
    }
    resultado = resJson
  } catch (error) {
    console.log(error)
    resultado = error
  }

  return resultado
}

export const getPlayerById = async (id: any) => {
  let resultado
  try {
    const res = await fetch(`https://api-exercise-q3.herokuapp.com/player/${id}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    })
    const resJson = await res.json()
    resultado = resJson
    if (res.status === 200) {
      console.log('Jugador obtenido')
    } else {
      console.log('Ha ocurrido un error')
    }
  } catch (error) {
    console.log(error)
    resultado = error
  }
  return resultado
}

export const deleteByIdPlayer = async (id: any) => {
  let resultado
  try {
    const res = await fetch(`https://api-exercise-q3.herokuapp.com/player/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    })
    const resJson = await res.json()
    resultado = resJson
    if (res.status === 200) {
    } else {
      console.log('Ha ocurrido un error')
    }
  } catch (error) {
    console.log(error)
    resultado = error
  }
  return resultado
}

export const createPlayer = async ({
  objPlayer,
  setMessage,
  cargarDatos,
  limpiarCampos,
  setOpenModal,
  modal
}: {
  objPlayer: any
  setMessage: any
  cargarDatos: any
  limpiarCampos: any
  setOpenModal: any
  modal: any
}) => {
  //e.preventDefault();
  let resultado
  try {
    const res = await fetch('https://api-exercise-q3.herokuapp.com/player', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(objPlayer)
    })
    //console.log(ataque)
    const resJson = await res.json()
    console.log({ resultadoKev: resJson })

    //console.log(resJson.data.errors)
    if (res.status === 200) {
      setMessage('Jugador creado correctamente')
      cargarDatos()
      limpiarCampos()
      setTimeout(() => {
        setOpenModal(!modal)
      }, 1500)
    } else {
      setMessage('Ha ocurrido un error')
      if (resJson.statusCode === 400) {
        console.log(resJson.data.errors)
        //setErrors(resJson.data.errors)
      }
    }
    resultado = res
  } catch (error) {
    console.log(error)
    //console.log({kevinnn: error.data})
    resultado = error
  }

  return resultado
}

export const updateByIdPlayer = async ({
  idPlayer,
  objPlayer,
  setMessage,
  cargarDatos,
  limpiarCampos,
  setOpenModal,
  modal
}: {
  idPlayer: any
  objPlayer: any
  setMessage: any
  cargarDatos: any
  limpiarCampos: any
  setOpenModal: any
  modal: any
}) => {
  //e.preventDefault();
  try {
    const res = await fetch(`https://api-exercise-q3.herokuapp.com/player/${idPlayer}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(objPlayer)
    })
    await res.json()
    if (res.status === 200) {
      setMessage('Jugador actualizado correctamente')
      cargarDatos()
      limpiarCampos()
      setTimeout(() => {
        setOpenModal(!modal)
      }, 1500)
    } else {
      setMessage('Ha ocurrido un error')
    }
  } catch (error) {
    console.log(error)
  }
}
