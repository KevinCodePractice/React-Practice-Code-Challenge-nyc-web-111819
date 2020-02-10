import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{

  state = {
    page: 0
  }

  moreSushi = () => {
    this.setState({
      page: this.state.page + 4
    })
  }

  render(){
    let page = this.state.page

    let displayedSushi = this.props.sushis.slice(page, page + 4).map(sushi => <Sushi key={sushi.id}{...sushi} eatSushi={this.props.eatSushi}/>)

    return (
      <Fragment>
        <div className="belt">
          {displayedSushi}
          <MoreButton moreSushi={this.moreSushi}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer