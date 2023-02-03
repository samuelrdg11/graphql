import { useQuery, gql } from '@apollo/client';

const PERSONAJES = gql`
query {
    characters{
      results{
        id
        name
        species
        gender
      }
    }
  }
`;

function MuestrePersonajes() {
    const { loading, error, data } = useQuery(PERSONAJES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return data.characters.results.map(({id, name, species, gender  }) => (
      <div key={id}>
        <h3>{name}</h3>
        <p>{species}</p>
        <p>{gender}</p>
      </div>
    ));
  }

export default function Cliente() {

    return (
        <div>
         <MuestrePersonajes/>
        </div>
    );
}