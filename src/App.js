import React, {Component} from 'react';
import Article from './Article';

class App extends Component {
  state = {
    article: [
      {
        titre: "La Coding 15",
        article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit temporibus unde nesciunt voluptatibus nulla doloribus!",
        auteur: "Martin"
      },
      {
        titre: "Le Travail de Fin d'Etude",
        article: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, necessitatibus laboriosam soluta dolorum cumque eaque accusantium unde suscipit vitae debitis mollitia officia dicta laborum reprehenderit delectus. Enim animi molestiae similique beatae in aliquid ab odit fugiat. Unde iure possimus veritatis fugit aliquam mollitia ullam vero dignissimos numquam. Pariatur, ducimus reprehenderit?",
        auteur: "Morgane André"
      },
      {
        titre: "Our Project",
        article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia numquam dicta praesentium ducimus eveniet. Repellat tenetur nam et nobis.",
        auteur: "La mère patrie"
      },
      {
        titre: "Dofus",
        article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure accusamus facere quam aliquam ab reprehenderit delectus sint, asperiores voluptates eaque quos blanditiis tempore quasi incidunt.",
        auteur: "Tonniskovic"
      }
    ]
  };
  render(){
    return (
      <div className="App">
        {this.state.article.map((articleInfo) => {
          return <Article name={articleInfo.titre} contenu={articleInfo.article} auteur={articleInfo.auteur}/>
        })}
      </div>
    );
  };
};

export default App;