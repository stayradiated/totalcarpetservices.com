import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

const Header = styled.div`
  background: #FE790E;
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
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Text = styled.p`
`

const UnorderedList = styled.ul`
`

const ListItem = styled.li`
`

const Index = () => (
  <div>
    <Header>
      <HeaderContent>
        <Logo>
          <LogoLink to='/'>
            Total Carpet Services Rotorua
          </LogoLink>
        </Logo>
      </HeaderContent>
    </Header>
    <PageContent>
      <UnorderedList>
        <ListItem>Total Carpet Services is Rotorua based.</ListItem>
        <ListItem>We have been operating since 1998.</ListItem>
        <ListItem>Fully trained operators specialising in carpet steam cleaning and restoration.</ListItem>
        <ListItem>Upholstory cleaning.</ListItem>
        <ListItem>Specialist stain removal.</ListItem>
        <ListItem>Flood restoration.</ListItem>
        <ListItem>Residential and commerical premises.</ListItem>
      </UnorderedList>

      <Text>Call Ziggy or Sue to discuss your requirements:</Text>

      <h2>0274 924 530</h2>

      <UnorderedList>
        <ListItem>PO Box 6245</ListItem>
        <ListItem>Rotorua 3043</ListItem>
        <ListItem>total.carpet@clear.net.nz</ListItem>
      </UnorderedList>
    </PageContent>
  </div>
)

export default Index
