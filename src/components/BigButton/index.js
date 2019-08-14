import React, {Fragment, useState, useEffect} from "react"
import './BigButton.css'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import {useTransition, animated} from 'react-spring'


export default (props) => {
  const {
    href,
    image,
    title,
    description,
    handleExpansion,
    handleCollapse,
    id,
    show,
  } = props

  const transitions = useTransition(show, null, {
    from: {  opacity: 0, height: 0 },
    enter: { opacity: 1, height:'auto'},
    leave: { opacity: 0, height: 0},
  })

  return (

    <div

      className={'big-button ' + (show ? 'stretched' : 'not-stretched')}
      onMouseEnter={() => handleExpansion(id)}

      onMouseLeave={handleCollapse}
    >
          <div className='big-button-bg'> {image} </div>
          <div className='big-button-overlay'>

            <div className="big-button-overlay-wrap" >
              <h1>{title}</h1>

              <div
                className="big-button-description"
                style={{
                    height: `${ show ? 'auto' : 0}`,
                    opacity: `${ show ? 1 : 0}`}
                }
              >
                {description.split('\\n').map((item, key) => (<Fragment key={key}>{item}<br/> </Fragment>))}
                <a href={ href }  className="big-anchor" style={{visibility: `${ show ? 'visible' : 'hidden'}`} }>
                  <div className="clickout-button"> {'Go to ' + title + ' >'} </div>
                </a>
              </div>

              <div className="big-button-description-mobile">
                <a href={ href } className="big-anchor" >
                  <div className="clickout-button"> {'Go to ' + title + ' >'} </div>
                </a>
              </div>

            </div>
          </div>

    </div>
  )
}


/*
<a style={{color: 'black'}} href={ href } className="big-anchor">

    <div className='big-button-bg'> {image} </div>
    <div className='big-button-overlay'>

      <div className="big-button-overlay-wrap" >
        <h1>{title}</h1>
        <div className="big-button-description"
              style={{height: `${ show ? 'auto' : 0}`, opacity: `${ show ? 1 : 0}`}}
        >
          {description.split('\\n').map(item => (<>{item}<br/> </>))}
        </div>

      </div>

    </div>
</a>

*/
