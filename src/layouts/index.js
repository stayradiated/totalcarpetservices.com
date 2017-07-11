import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Template = (props) => (
  <div>
    <Helmet
      title='Total Carpet Services Rotorua'
      meta={[
        { name: 'description', content: 'Fully trained operators specialising in carpet steam cleaning and restoration.' },
      ]}
    />
    {props.children()}
  </div>
)

Template.propTypes = {
  children: PropTypes.func,
}

export default Template
