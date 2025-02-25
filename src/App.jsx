// import { useState } from 'react';

// function App() {
//   const books = [
//     {
//       id: 1,
//       image:
//         'https://tse2.mm.bing.net/th?id=OIP.IIIPIPZYMBOJgxFfWGRtBAHaHa&rs=1&pid=ImgDetMain',
//       name: 'The Great Adventure',
//       genre: 'Fiction',
//       author: 'Jane Doe',
//     },
//     {
//       id: 2,
//       image: 'https://i.thenile.io/r1000/9781496687197.jpg?r=6085750d133cf',
//       name: 'Mysteries of the Universe',
//       genre: 'Science',
//       author: 'John Smith',
//     },
//     {
//       id: 3,
//       image: 'https://images3.penguinrandomhouse.com/cover/9781933771106',
//       name: 'History Revisited',
//       genre: 'Non-Fiction',
//       author: 'Emily Johnson',
//     },
//     {
//       id: 4,
//       image:
//         'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700317474i/202368563.jpg',
//       name: 'Culinary Delights',
//       genre: 'Cooking',
//       author: 'Michael Brown',
//     },
//   ];

//   return <>{/* write code to display all the books using */}</>;
// }

// export default App;

import React from "react";
import EntityCard from "./EntityCard";

const entities = [
    { name: "React", description: "A JavaScript library for building UI" },
    { name: "Node.js", description: "A runtime for executing JavaScript on the server" },
];

const App = () => {
    return (
        <div>
            <h1>Entities List</h1>
            {entities.map((entity, index) => (
                <EntityCard key={index} name={entity.name} description={entity.description} />
            ))}
        </div>
    );
};

export default App;

