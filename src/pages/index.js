import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import HomepageLayout from '../layouts/HomepageLayout';
import ContentPage from '../layouts/ContentPage';
import { Paper, TextareaAutosize } from '@mui/material';
import TextArea from '../components/TextArea'
import AppCard from '../components/AppCard';
import { jsList } from '../constants/pagesList'



export default function Home() {



  return (
    <>
      <div className="container" style={{ padding: 10, }}>
        <Head><title>Javascript Tools | Aniket-JS</title></Head>
        <div className="popularAppsHeading" style={{ marginBottom: 20, }}>
          Popular Apps
        </div>
        <div className="popularAppsContainer" style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          {
            jsList.map((item, index) => (<AppCard key={index} item={item} category="Javascript" />))
          }
        </div>



      </div>
    </>
  )
}
