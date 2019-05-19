import React from 'react'
import { Document, Page, Text, View, Link } from '@react-pdf/renderer'
import styled from '@react-pdf/styled-components'
import python from './assets/python.png'
import docker from './assets/docker.jpg'
import firebase from './assets/firebase.png'
import react from './assets/react.png'
import redux from './assets/redux.png'
import javascript from './assets/javascript.png'
import cpp from './assets/cpp.png'
import archlinux from './assets/archlinux.png'
import java from './assets/java.png'
import raspi from './assets/raspi.png'

const MainPage = styled.Page`
  flex-direction: row;
  background-color: white;
`

const Header = styled.View`
  background-color: #5b5fab;
  color: white;
  padding: 20pt;
  flex-direction: column;
  justify-content: flex-start;
`

const CirclePic = styled.Image`
  width: 80;
  height: 80;
  border-radius: 40;
  align-self: center;
  border: 2pt white;
  margin: 5pt;
`

const CirclePicSmall = styled.Image`
  width: 30;
  height: 30;
  border-radius: 20;
  background-color: white;
  padding: 5pt;
  margin-right: 5pt;
  margin-bottom: 5pt;
`

const PersonalInfo = styled.View`
  flex-direction: column;
  font-family: Roboto;
  justify-content: center;
  padding: 3pt;
  margin-bottom: 10pt;
`

const Title = styled.Text`
  font-size: 14pt;
  font-style: italic;
  margin-bottom: 10pt;
`

const Description = styled.Text`
  font-size: 10pt;
  padding-bottom: 5pt;
  max-width: 150pt;
`

const Body = styled.View`
  padding: 20pt;
  flex-grow: 1;
  font-family: Roboto;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.35pt;
`

const SectionTitleText = styled.Text`
  font-size: 14pt;
  margin-right: 10pt;
  color: ${props => props.color || 'black'};
`

const HorizontalLine = styled.View`
  flex: 1;
  background: ${props => props.color || 'black'};
  height: 1pt;
`

const SectionTitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10pt;
  margin-top: 5pt;
`

const HorizontalLineView = props => (
  <SectionTitleWrapper>
    <HorizontalLine color={props.color} />
  </SectionTitleWrapper>
)

const SectionTitle = props => (
  <SectionTitleWrapper>
    <SectionTitleText color={props.color}>{props.children}</SectionTitleText>
    <HorizontalLine color={props.color} />
  </SectionTitleWrapper>
)

const Company = styled.Text`
  font-size: 10pt;
  margin-bottom: 1pt;
`
const WorkPeriod = styled.Text`
  font-weight: lighter;
  font-size: 8pt;
  margin-bottom: 4pt;
`
const Position = styled.Text`
  font-weight: bold;
  font-size: 10pt;
  margin-bottom: 1pt;
`

const HeaderTitle = styled.Text`
  font-size: 12pt;
  padding-bottom: 10pt;
`

const Paragraph = styled.Text`
  margin-bottom: 5pt;
  margin-top: 5pt;
  font-size: 10pt;
  width: 320pt;
`

const JobDescription = styled.View`
  padding-bottom: 30pt;
`

const ProgressBarContainer = styled.View`
  width: 70pt;
  height: 12pt;
  flex-direction: row;
  justify-content: space-between;
`

const ProgressBarItem = styled.View`
  width: 10pt;
  height: 10pt;
  border-radius: 5pt;
  background-color: ${props => (props.filled ? 'white' : 'gray')};
`

const ProgressBar = props => (
  <ProgressBarContainer>
    <ProgressBarItem filled={props.count > 0} />
    <ProgressBarItem filled={props.count > 1} />
    <ProgressBarItem filled={props.count > 2} />
    <ProgressBarItem filled={props.count > 3} />
    <ProgressBarItem filled={props.count > 4} />
  </ProgressBarContainer>
)

const Language = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Experience = styled.View`
  flex-direction: row;
  width: 150pt;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const Footer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 8pt;
  font-style: italic;
`

const ListItemWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5pt;
`

const Bullet = styled.View`
  margin-top: 3pt;
  margin-left: 5pt;
  margin-right: 5pt;
  width: 4pt;
  height: 4pt;
  border-radius: 2pt;
  background-color: $white;
`

const ListItemText = styled.Text`
  font-size: 10pt;
  max-width: 150pt;
`

const ListItem = props => (
  <ListItemWrapper>
    <Bullet />
    <ListItemText>{props.children}</ListItemText>
  </ListItemWrapper>
)

const MyDocument = () => (
  <Document>
    <MainPage size="A4" wrap={false}>
      <Header>
        <CirclePic src={require('./assets/GuillermoFermin.jpg')} />
        <PersonalInfo>
          <Text>Guillermo De Fermín</Text>
          <Title>Computer Engineer</Title>
        </PersonalInfo>
        <PersonalInfo>
          <Description>📅 June 25th, 1995</Description>
          <Description>📍 Madrid, Spain</Description>
          <Description>📧 gdefermin@gmail.com</Description>
          <Description>📞 +34 696 389 767</Description>
        </PersonalInfo>
        <HorizontalLineView color="white" />
        <PersonalInfo>
          <HeaderTitle>Languages</HeaderTitle>
          <Language>
            <ListItem>English</ListItem>
            <ProgressBar count={5} />
          </Language>
          <Language>
            <ListItem>Spanish</ListItem>
            <ProgressBar count={5} />
          </Language>
          <Language>
            <ListItem>Italian</ListItem>
            <ProgressBar count={4} />
          </Language>
          <Language>
            <ListItem>German</ListItem>
            <ProgressBar count={3} />
          </Language>
          <Language>
            <ListItem>Dutch</ListItem>
            <ProgressBar count={1} />
          </Language>
          <Language>
            <ListItem>French</ListItem>
            <ProgressBar count={1} />
          </Language>
        </PersonalInfo>
        <HorizontalLineView color="white" />
        <PersonalInfo>
          <HeaderTitle>Awards / Titles</HeaderTitle>
          <ListItem>
            Cambridge Certificate in Advanced English (Level C2)
          </ListItem>
          <ListItem>
            2nd place winner, 2017 Indoor Micro Air Vehicle competition
          </ListItem>
        </PersonalInfo>
        <HorizontalLineView color="white" />
        <PersonalInfo>
          <HeaderTitle>Experience with</HeaderTitle>
          <Experience>
            <CirclePicSmall src={python} />
            <CirclePicSmall src={javascript} />
            <CirclePicSmall src={react} />
            <CirclePicSmall src={cpp} />
            <CirclePicSmall src={docker} />
            <CirclePicSmall src={archlinux} />
            <CirclePicSmall src={firebase} />
            <CirclePicSmall src={java} />
            <CirclePicSmall src={raspi} />
          </Experience>
        </PersonalInfo>
        <HorizontalLineView color="white" />
        <PersonalInfo>
          <HeaderTitle>Hobbies</HeaderTitle>
          <ListItem>Playing guitar and ukulele</ListItem>
          <ListItem>Travelling</ListItem>
          <ListItem>Biking, walking and exploring</ListItem>
        </PersonalInfo>
      </Header>
      <Body>
        <View>
          <SectionTitle>Work Experience</SectionTitle>
          <JobDescription>
            <Position>Consultant</Position>
            <Company>MHP - A Porsche Company</Company>
            <WorkPeriod>January 2018 - August 2019</WorkPeriod>
            <WorkPeriod>📍 Stuttgart, Germany</WorkPeriod>
            <Paragraph>
              I have been working for Porsche as an external consultant, in a
              cross- brand project with Audi, VW and Porsche. My team's role is
              to provide a developer tools and a development environment for
              software developers of the three brands.
            </Paragraph>
          </JobDescription>

          <JobDescription>
            <Position>Co-founder & CTO</Position>
            <Company>connme. UG</Company>
            <WorkPeriod>September 2016 - Present</WorkPeriod>
            <WorkPeriod>📍 Madrid, Spain & Stuttgart, Germany</WorkPeriod>
            <Paragraph>
              As CTO of connme., I'm responsible of all of the technical aspects
              of the company. This includes designing and implementing the
              website and mobile application as well as interviewing new
              programmers and coordinating and overseeing their work.
            </Paragraph>
            <Paragraph>
              Our efforts so far have led us to release a beta version of the
              mobile application. We are now searching for investors.
            </Paragraph>
          </JobDescription>

          <JobDescription>
            <Position>Software Engineer</Position>
            <Company>
              Computer Vision and Automated Robotics Laboratory (UPM)
            </Company>
            <WorkPeriod>May 2016 - September 2017</WorkPeriod>
            <WorkPeriod>📍 Madrid, Spain</WorkPeriod>
            <Paragraph>
              I designed and implemented 3 core components of the robotics
              artificial intelligence stack Aerostack. One of the components is
              responsible for managing a symbolic memory for an unmanned aerial
              vehicle, while the other two interpret mission plans specified for
              it.
            </Paragraph>
            <Paragraph>
              I worked closely with other software engineers in my team, as well
              as with industrial engineers responsible for writing other main
              components of the stack.
            </Paragraph>
            <Paragraph>
              Our work led us to earn 2nd place at the 2017 Indoor Micro Air
              Vehicle competition.
            </Paragraph>
          </JobDescription>

          <SectionTitle>Education</SectionTitle>
          <JobDescription>
            <Position>Bachelor in Computer Science Engineering</Position>
            <Company>Universidad Politécnica de Madrid</Company>
            <WorkPeriod>2013 - 2017</WorkPeriod>
          </JobDescription>
        </View>
        <Footer>
          <Text>Made with React. Source: </Text>
          <Link href="https://github.com/GuilleDF/resume">
            https://github.com/GuilleDF/resume
          </Link>
        </Footer>
      </Body>
    </MainPage>
  </Document>
)

export default MyDocument
