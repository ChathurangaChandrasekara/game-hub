import useGenre from '../hooks/useGenre'

const GenreList = () => {
    const {data} = useGenre();
  return (
    <ul>
        {data.map(x => <li key={x.id}>{x.name}</li>)}
    </ul>
  )
}

export default GenreList