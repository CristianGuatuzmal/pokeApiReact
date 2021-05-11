import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { pokeApiURL } from '../constants';
import { GenerationData } from '../interfaces';
import { PokemonTile } from '../pokemon-tile/pokemon-tile';
import './generation-page.scss'

export class GenerationPage extends PureComponent<{} & GenerationPageProps, GenerationPageState> {

  constructor(props: any) {
    super(props)
    this.state = { generationData: (this.props.location as any).state.generationData };
  }

  render(): JSX.Element {
    const state = this.state;
    const nombreEnEspaniol = state.generationData.names.find(name => name.language.name === 'es')?.name;
    return (
      <div>
        <h2> { nombreEnEspaniol ? nombreEnEspaniol : state.generationData.names[0]?.name } </h2>
        { this.renderPokemonTiles() }
      </div>
    )
  }

  renderPokemonTiles():  JSX.Element {
    const state = this.state;
    return(
    <div className="pokemon-tiles-container">
      {state.generationData.pokemon_species.map((specie, index) => <PokemonTile pokemonName={specie.name} pokemonUrl={`${pokeApiURL}/pokemon/${specie.name}`} key={index} />)}
    </div>
    )
  }
}

interface GenerationPageRouterProps {
  generationData: string
}

interface GenerationPageProps extends RouteComponentProps<GenerationPageRouterProps> {
}

interface GenerationPageState {
  generationData: GenerationData;
}

