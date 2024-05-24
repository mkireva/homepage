import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.jpg'
import thumbBeinsaNotes from '../public/images/works/beinsanotes.png'
import Image from 'next/image'
import Typewriter from './../components/typewriter'
import { useEffect, useState } from 'react'
// import Cup from '../components/cup'

import Quotes from '../components/quotes'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const [quotes, setQuotes] = useState('')

  const getQuote = () => {
    fetch('https://type.fit/api/quotes')
      .then(res => res.json())
      .then(data => {
        let randomNum = Math.floor(Math.random() * data.length)
        setQuotes(data[randomNum])
      })
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mt={10}
          pl={10}
          pr={10}
          pt={6}
          pb={6}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Quotes quotes={quotes} />

          <Button
            mt={2}
            onClick={getQuote}
            size="sm"
            colorScheme="teal"
            align-item="right"
          >
            Take a quote!
          </Button>
        </Box>
        {/* <Cup /> */}
        <Box
          mt={20}
          borderRadius="lg"
          mb={14}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Typewriter />
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Mariya Kireva
            </Heading>
            <p>Software Engineer (Developer / Philosopher / Musician)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/mariapan.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Mariya is a freelancer and a full-stack developer based in Munich
            with a passion for building digital services/stuff she wants. She
            has a knack for all things launching products, from planning and
            designing all the way to solving real-life problems with code. When
            not online, she loves playing flute, hiking and reading books.
            Currently, she is working on product called{' '}
            <NextLink href="/works/beinsascores" passHref scroll={false}>
              <Link> Music Sheets</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2011</BioYear>
            Completed the Magister Artium in Philosophy, Psychology, German
            philology at the LMU Munich.
          </BioSection>
          <BioSection>
            <BioYear>2008</BioYear>
            Worked for different companies in the area of translation,
            e-learning, online marketing, journalism.
          </BioSection>
          <BioSection>
            <BioYear>2013</BioYear>
            Start writing a PhD in Philosophy about Hegels term of truth.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Switching to programming and frontend development.
          </BioSection>
          <BioSection>
            <BioYear>2020 - 2021</BioYear>
            Working as a Software Engineer for climate action.
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Working as a Freelance Software Engineer on different projects.
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Working on a Score Data Base{' '}
            <NextLink href="/works/beinsascores" passHref scroll={false}>
              <Link>Music Sheets</Link>
            </NextLink>
            .
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            <Link
              href="https://www.youtube.com/watch?v=Ugc5FZsycAw"
              target="_blank"
            >
              Music,{' '}
            </Link>
            <NextLink href="/posts/books" passHref scroll={false}>
              <Link>Reading, {''}</Link>
            </NextLink>
            <Link
              href="https://www.youtube.com/watch?v=ubs4o951eCo"
              target="_blank"
            >
              Playing Flute,{' '}
            </Link>
            <Link href="https://500px.com/p/mariapan" target="_blank">
              Hiking
            </Link>
            , Photography
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/mkireva" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @mkireva
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://mkireva.github.io/notes-frontend/score"
              title="Music Sheets"
              thumbnail={thumbBeinsaNotes}
            >
              Music Sheets - A plattform for sharing music scores
            </GridItem>
            <GridItem
              href="https://www.youtube.com/channel/UCy18f1D75EjJlcNmJpgSXgQ/featured"
              title="Paneurhythmie"
              thumbnail={thumbYouTube}
            >
              My YouTube channel
            </GridItem>
          </SimpleGrid>

          <Box align="center" my={4}>
            <NextLink href="/posts" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
