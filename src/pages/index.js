import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

const Header = styled.div`
  background: orange;
  margin-bottom: ${rhythm(1)};
`

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: ${rhythm(1)} ${rhythm(3 / 4)};
`

const PageContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: ${rhythm(1)} ${rhythm(3 / 4)};
  padding-top: 0;
`

const Logo = styled.h1`
  margin: 0;
`

const LogoLink = styled(Link)`
  color: white;
  textDecoration: none;
`


const Index = () => (
  <div>
    <Header>
      <HeaderContent>
        <Logo>
          <LogoLink to='/'>
            TCS: Total Carpet Services Rotorua
          </LogoLink>
        </Logo>
      </HeaderContent>
    </Header>
    <PageContent>
      <p>Total Carpet Services is Rotorua based.</p>

      <p>Operating since 1998.</p>

      <p>Fully trained operators specialising in carpet steam cleaning and restoration.</p>

      <p>Upholstory cleaning.</p>

      <p>Specialist stain removal.</p>

      <p>Flood restoration.</p>

      <p>Residential and commerical premises.</p>

      <p>Call Ziggy or Sue to discuss your requirements:</p>

      <h2>0274 924 530</h2>

      <p>PO Box 6245</p>
      <p>Rotorua 3043</p>
      <p>total.carpet@clear.net.nz</p>
    </PageContent>
  </div>
)

export default Index
