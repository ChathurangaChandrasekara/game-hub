import React from 'react'
import useGenre from '../hooks/useGenre'

const GenreList = () => {
    const {genres} = useGenre();
  return (
    <ul>
        {genres.map(x => <li key={x.id}>{x.name}</li>)}
    </ul>
  )
}

export default GenreList