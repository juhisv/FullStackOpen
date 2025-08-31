import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import personService from "./services/persons"
import Notification from "./components/Notification"

const App = () => {
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")
  const [persons, setPersons] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons)
    })
  }, [])

  const numbersToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter)
  )

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase())
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (!newName.trim() || !newNumber.trim()) {
      setErrorMessage("Name and number cannot be empty")
      setTimeout(() => setErrorMessage(null), 5000)
      return
    }
    const personObject = {
      name: newName.trim(),
      number: newNumber.trim(),
    }
    const existingPerson = persons.find(
      (p) => p.name.toLowerCase() === personObject.name.toLowerCase()
    )
    if (!existingPerson) {
      personService.create(personObject).then((createdPerson) => {
        setPersons(persons.concat(createdPerson))
        setSuccessMessage(`Added ${newName}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
        setNewName("Add name...")
        setNewNumber("Add number...")
      })
    } else if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new number?`)) {
      personService.update(existingPerson.id, personObject).then((updatedPerson) => {
        setPersons(persons.map((p) => (p.id === updatedPerson.id ? updatedPerson : p)))
        setSuccessMessage(`Updated ${newName}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
        setNewName("Add name...")
        setNewNumber("Add number...")
      }).catch((error) => {
        setErrorMessage(`Information of ${newName} has already been removed from server`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    }
  }

  const handleDelete = (id) => {
    const person = persons.find((p) => p.id === id)
    if (person && window.confirm(`Delete ${person.name}?`)) {
      personService.remove(person.id).then(() => {
        setPersons(persons.filter((p) => p.id !== person.id))
        setSuccessMessage(`Deleted ${person.name}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Notification message={successMessage} className="success" />
      <Notification message={errorMessage} className="error" />
      <h2>add a new</h2>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={numbersToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App
