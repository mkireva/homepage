import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/book'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Books = () => (
  <Layout title="Beinsa Notes">
    <Container>
      <Title>
        Books witch inspired me <Badge>2022-</Badge>
      </Title>
      <P>The following books and authors was a big inspiration for me.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platon</Meta>
          <Link href="https://de.wikipedia.org/wiki/Politeia">
            Politeia <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Baruch de Spinoza</Meta>
          <Link href="https://de.wikipedia.org/wiki/Ethica,_ordine_geometrico_demonstrata">
            Ethica, ordine geometrico demonstrata <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Wolfgang von Geothe</Meta>
          <Link href="https://de.wikipedia.org/wiki/Kritik_der_reinen_Vernunft">
            Faust <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Immanuel Kant</Meta>
          <Link href="https://de.wikipedia.org/wiki/Kritik_der_reinen_Vernunft">
            Kritik der reinen Vernunft <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Georg Wilhelm Friedrich Hegel</Meta>
          <Link href="https://de.wikipedia.org/wiki/Kritik_der_reinen_Vernunft">
            Wissenschaft der Logik <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Beinsa Duno</Meta>
          <Link href="https://de.wikipedia.org/wiki/Petar_Danow">
            Wissenschaft und Erziehung <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Robert C. Martin</Meta>
          <Link href="https://de.wikipedia.org/wiki/Petar_Danow">
            Clean Code <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Books
export { getServerSideProps } from '../../components/chakra'
