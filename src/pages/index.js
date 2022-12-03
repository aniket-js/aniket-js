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

export default function Home() {



  return (
    <>
      <div className="container" style={{ margin: 'auto', padding: 10 }}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (<AppCard key={index} item={item} />))
        }


      </div>
    </>
  )
}
