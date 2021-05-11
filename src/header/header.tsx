import { PureComponent } from 'react'
import './header.scss'

export class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <h1>Pokepedia</h1>
      </div>
    )
  }
}