const jugadores = [
  { 
      id: '10', 
      name: 'Messi', 
      team: 'argentina', 
      category: 'delantero', 
      img:'https://res.cloudinary.com/fedexx/image/upload/v1662138097/after/Anotaci%C3%B3n_2022-09-02_133211_xvsvoy.png', 
      stock: 25, 
      description:'Quién no ama a Messi?'
  },
  { 
      id: '2', 
      name: 'Dibu Martinez', 
      team: 'argentina', 
      category: 'arquero', 
      img:'https://res.cloudinary.com/fedexx/image/upload/v1662138096/after/Anotaci%C3%B3n_2022-09-02_133601_ie2tbo.png', 
      stock: 16, 
      description:'Arquero de argentina'
  },
  {   
      id: '3', 
      name: 'Armani', 
      team: 'argentina', 
      category: 'arquero', 
      img:'https://res.cloudinary.com/fedexx/image/upload/v1662138097/after/Anotaci%C3%B3n_2022-09-02_133336_wwuupf.png', 
      stock: 10, 
      description:'Arquero de argentina'
  },
  {   
      id: '4', 
      name: 'Neymar', 
      team: 'brasil', 
      category: 'delantero', 
      img:'https://res.cloudinary.com/fedexx/image/upload/v1662138097/after/Anotaci%C3%B3n_2022-09-02_133855_bc1sz1.png', 
      stock: 10, 
      description:'delantero de brasil'
  },
  {   
      id: '5', 
      name: 'Mbappe', 
      team: 'francia', 
      category: 'delantero', 
      img:'https://res.cloudinary.com/fedexx/image/upload/v1662138096/after/Anotaci%C3%B3n_2022-09-02_133954_megtds.png', 
      stock: 10, 
      description:'delantero de francia'
  },
  {   
      id: '6', 
      name: 'Leandro Paredes', 
      team: 'argentina', 
      category: 'defensor', 
      img:'https://res.cloudinary.com/fedexx/image/upload/v1662138096/after/Anotaci%C3%B3n_2022-09-02_133743_chebbp.png', 
      stock: 10, 
      description:'defensor de argentina'
  }
]


export const getJugadores = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(jugadores)
      }, 5000)
  })
}

export const getJugadoresByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(jugadores.filter(jugador => jugador.category === categoryId))
      }, 5000)
  })
}


export const getJugadoresByTeam = (teamId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(jugadores.filter(jugador => jugador.team === teamId ))
    } , 2000)
  })
}

export const getJugadorById = (id) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(jugadores.find(jugador => jugador.id === id))
      }, 5000)
  })
}