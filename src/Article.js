import React, {Component} from 'react';

class Article extends Component {
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.contenu}</p>
                <span>{this.props.auteur}</span>
            </div>
        );
    };
};

export default Article;