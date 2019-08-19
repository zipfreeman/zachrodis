import React from "react";
import PropTypes from 'prop-types'

/*
what functions do the forms have in common?

- submit data to server(less)
  • button and action
- forms are different based on type, but have a few things in common:
  • contact info - email address
*/

/*
1. apply props that exist from the param Component (ContactSumbit),
   - for example, the things that are specifc to a type of contactSubmit
2. apply the common elements from the HOC
   - for example, the things that all contactSubmits need, like sending some kind of POST to netlify

would {children} pass down from 'ContactSubmit' param being passed in?
*/


const contactSubmitComponent = (ContactSumbit) => {
  class ComposedContactSumbit extends React.Component {

    handleSubmit(){
      console.log('handleSubmit');
      //post to netlify api
    }

    render(){
      console.log('ComposedContactSumbit PROPS', this.props);
      return(
        <ContactSumbit {...this.props}>

          <div>Your Name:</div>
          <input/>
          <div>Your Email</div>
          <input/><br/>
          <button onClick={this.handleSubmit}> Submit </button>

        </ContactSumbit>
      )
    }

  }

  return ComposedContactSumbit
}

export default contactSubmitComponent