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

const LargeText = styled.p`
  font-size: 5em;
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
      <StyledText>Total Carpet Services is Rotorua based.</StyledText>

      <StyledText>Operating since 1998.</StyledText>

      <StyledText>Fully trained operators specialising in carpet steam cleaning and restoration.</StyledText>

      <StyledText>Upholstory cleaning.</StyledText>

      <StyledText>Specialist stain removal.</StyledText>

      <StyledText>Flood restoration.</StyledText>

      <StyledText>Residential and commerical premises.</StyledText>

      <StyledText>Call Ziggy or Sue to discuss your requirements:</StyledText>

      <h2>0274 924 530</h2>

      <StyledText>PO Box 6245</StyledText>
      <StyledText>Rotorua 3043</StyledText>
      <StyledText>total.carpet@clear.net.nz</StyledText>
    </PageContent>
  </div>
)

export default Index
