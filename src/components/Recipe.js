import React, { Component } from 'react';
import {Link} from "react-router-dom"

const API_KEY = "b37a72663b9406cbe55afe74ce820707"

class Recipe extends Component {
  state = {
    currentRecipe: []
  }

  componentDidMount = async () => {
    const recipeId = this.props.match.params.id

    const api_call = await fetch(`https://www.food2fork.com/api/get?key=${API_KEY}&rId=${recipeId}`)
    const data = await api_call.json()
    console.log(data)
    this.setState({
      currentRecipe: data.recipe
    })
  }

  render() {
    const recipe = this.state.currentRecipe

    return (
      <div className="container">
        {
          recipe.length !== 0 && 
          <div className="active-recipe">
            <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
            Website: <span><a href={recipe.publisher_url} target="_blank">{recipe.publisher_url}</a></span>
            </p>
            <button className="active-recipe__button"><Link to="/">Go Back Home</Link></button>
          </div>
        }
      </div>
    )
  }
}

export default Recipe