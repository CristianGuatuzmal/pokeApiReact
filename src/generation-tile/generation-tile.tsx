import { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import { GenerationData } from '../interfaces';
import './generation-tile.scss'

export class GenerationTile extends PureComponent<GenerationTileProps, GenerationTileState> {

  generationApiSource: string;
  generationImageSource: string;

  constructor(props: GenerationTileProps) {
    super(props);
    this.state = {
      generationData: {
        name: '',
        names: [],
        id: 0,
        main_region: {
          name: '',
          url: ''
        },
        moves: [],
        pokemon_species: [],
        types: [],
        version_groups: []
      }
    }
    this.generationApiSource = this.props.generationApiSource!;
    this.generationImageSource = this.props.generationImageSource!;
  }

  componentDidMount(): void {
    fetch(`${ this.generationApiSource }`)
      .then(res => res.json())
      .then(data => this.setState({
        	generationData: data
      }))
  } 

  render(): JSX.Element {
    const generationData = this.state.generationData;
    const nombreEnEspaniol = generationData.names.find(name => name.language.name === 'es')?.name;
    return (
      <Link to= {{pathname: "/generation", state: { generationData }}}>
        <div className="tile">
          <img src={ this.generationImageSource } alt="imagen de generación pokemon" className="image"></img>
          <div className="tile-label">
            <label>{ nombreEnEspaniol ? nombreEnEspaniol : generationData.names[0]?.name }</label>
          </div>
        </div>
      </Link>
    )
  }

}

interface GenerationTileProps {
  generationApiSource?: string;
  generationImageSource?: string;
}

interface GenerationTileState {
  generationData: GenerationData;
}