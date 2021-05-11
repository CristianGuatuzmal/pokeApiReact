import { PureComponent } from "react";

export class PokemonTile extends PureComponent<PokemonTileProps, PokemonTileState> {

  constructor(props: any) {
    super(props);
    this.state = {
      pokemonData: {}
    }
  }

  componentDidMount(): void {
    fetch(this.props.pokemonUrl)
      .then(res => res.json())
      .then(response => this.setState({pokemonData: response}))
  }

  render(): JSX.Element {
    const state = this.state;
    return (
      <div>
        <img src={state.pokemonData.sprites?.front_default} alt='imagen pokemon'></img>
        <h3>{ state.pokemonData.name }</h3>
      </div>
    )
  }
}


interface PokemonTileProps {
  pokemonName: string
  pokemonUrl: string;
}

interface PokemonTileState {
  pokemonData: any;
}
