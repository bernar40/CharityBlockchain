import React, { Component } from 'react';
import './SubHeader.css';



class SubHeader extends Component {
  render() {
    return (
      <div className='sub-container'>
        <img className={ 'secondary-asset ' + this.props.animation } src={this.props.subContent} alt="sub-content"/>
          <div className='sub-header__margins'> 
          <div className={'sub-header__padding ' + this.props.padding }>
            <div className='sub-header-title'>{this.props.title}</div>
              <hr className='horizontal-line' />
            </div>
         </div>
        </div>
    )
  }
}

export default SubHeader;
