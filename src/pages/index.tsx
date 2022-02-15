import {
  Flex,
  Grid,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  Spinner,
  Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Flex
      minHeight='100vh'
      px='2'
      direction='column'
      justify='center'
      align='center'
    >
      <Head>
        <title>React-Next Boilerplate</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Flex py='20' flex='1' direction='column' justify='center' align='center'>
        <Heading m='0' lineHeight='shorter' fontSize='6xl' textAlign='center'>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </Heading>

        <Spinner />
        <Text className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </Text>

        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
          <GridItem>
            <LinkBox
              as='article'
              maxW='sm'
              p='5'
              borderWidth='1px'
              rounded='md'
              _hover={{
                color: '#0070f3',
                borderColor: '#0070f3',
                background: 'silver',
              }}
            >
              <LinkOverlay href='https://nextjs.org/docs'>
                <Heading size='md' my='2'>
                  Documentation &rarr;
                </Heading>
              </LinkOverlay>
              <Text>
                Find in-depth information about Next.js features and API.
              </Text>
            </LinkBox>
          </GridItem>

          <GridItem>
            <LinkBox
              as='article'
              maxW='sm'
              p='5'
              borderWidth='1px'
              rounded='md'
              _hover={{ color: '#0070f3', borderColor: '#0070f3' }}
            >
              <LinkOverlay href='https://nextjs.org/learn'>
                <Heading size='md' my='2'>
                  Learn &rarr;
                </Heading>
              </LinkOverlay>
              <Text>
                Learn about Next.js in an interactive course with quizzes!
              </Text>
            </LinkBox>
          </GridItem>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className={styles.card}
          >
            <Heading>Examples &rarr;</Heading>
            <Text>
              Discover and deploy boilerplate example Next.js projects.
            </Text>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <Heading>Deploy &rarr;</Heading>
            <Text>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </Text>
          </a>
        </Grid>
      </Flex>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </Flex>
  );
};

export default Home;
