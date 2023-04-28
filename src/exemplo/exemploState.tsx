import { ChangeEvent, useState } from 'react'
import './App.css'

function App() {

  const [player, setPlayer] = useState <any>({

    name: "Sandra",
    nickName: "Sedano",
    Score: 10

  })

  const handleClick = () => {
    const newScore = player.score + 1
    setPlayer ({...player, score:newScore})


  }
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {

    const newName = event.target.value

        setPlayer ({...player, name:newName})
  }
  const handleChangeNickName = (event: ChangeEvent<HTMLInputElement>) => {
const NewNickName = event.target.value 

setPlayer ({...player, nickName:NewNickName})
  }

  return (
    <>
      <h1>Imutabilidade</h1>

      <h2>Dados do Jogador</h2>
      <p>
        <h3>Score: {player.Score}</h3>
        <button onClick= {handleClick}>+</button>
      </p>
      <p>
        <label> Player name:
          <input type="text" name='name' onChange={handleChangeName} value={player.name} />
        </label>
        <label>
          PLayer nickName
          <input type="text" name='nickName' onChange={handleChangeNickName} value={player.nickName} />
  </label>
      </p>
      <hr />
      <h3>{player.name} | {player.nickName} </h3>
    </>
  )
}

export default App
