const PersonForm = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  addPerson,
}) => (
  <form>
    <table>
      <tbody>
        <tr>
          <td>
            name:{" "}
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onClick={() => setNewName("")}
            />
          </td>
        </tr>
        <tr>
          <td>
            number:{" "}
            <input
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
              onClick={() => setNewNumber("")}
            />
          </td>
          <td>
            <button type="submit" value={newName} onClick={addPerson}>
              add
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
)

export default PersonForm
