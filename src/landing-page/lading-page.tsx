import { PureComponent } from 'react';
import { placeholders, pokeApiURL } from '../constants';
import { GenerationTile } from '../generation-tile/generation-tile';
import './landing-page.scss'

export class LandingPage extends PureComponent<{}, landingState> {
  constructor(props: any) {
    super(props);
    this.state = {
      generationList: []
    }
  }

  componentDidMount(): void {
    fetch(`${ pokeApiURL }/generation`)
      .then(res => res.json())
      .then(data => this.setState({ generationList: data.results }));
  }

  render(): JSX.Element {
    const generationList = this.state.generationList;
    return (
      <div className="generations-holder">
       { generationList?.map(
         (generation: any, index: number) => <GenerationTile key={ index } generationApiSource={ generation.url } generationImageSource={placeholders[index]}/>) }
      </div>
    )
  }
}

interface landingState {
  generationList?: any[];
}