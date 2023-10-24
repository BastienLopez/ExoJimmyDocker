import React from 'react';
import './App.css'; // Importez le fichier CSS que vous avez créé

function App() {
  const data = [
    { nom: 'Jimmy', prenom: 'Lefevre', description: 'exo1 de Docker avec Jimmy' },
    // Vous pouvez ajouter d'autres entrées ici
  ];

  return (
    <div className="App">
      <h1>Tableau de données</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="table-cell">{item.nom}</td>
              <td className="table-cell">{item.prenom}</td>
              <td className="table-cell description-cell">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;