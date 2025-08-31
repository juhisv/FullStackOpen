
const Persons = ({ persons, handleDelete }) => (
  <div>
    {persons.map((person) => (
      <li className='person' key={person.id}>
        {person.name} {person.number} <button onClick={() => handleDelete(person.id)}>delete</button>
      </li>
    ))}
  </div>
);

export default Persons;
