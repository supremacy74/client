// @ts-ignore

import React from 'react'

import Head from 'next/head'

import styles from '../styles/modules/Wrapper.module.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { useState, useEffect } from 'react'

const Wrapper = ({ children }) => {

    const [mode, setMode] = useState('light')

    useEffect(() => {

        if (localStorage.getItem('mode')) {
            setMode(localStorage.getItem('mode'))
        } else {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setMode('dark')
            } else {
                setMode('light')
            }
        }

    }, [])

    children = React.Children.map(children, child => {

        if (React.isValidElement(child)) {
            return React.cloneElement(child, { mode, setMode })
        }

        return child

    })

    return (
        <div className={styles.wrapper}>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="description" content="Opentype. The last project." />
                <meta
                    name="viewport"
                    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>opentype</title>
            </Head>
            <Header mode={mode} setMode={setMode} />
            <main className={styles.main}>
                <div className={`container ${styles.container}`}>
                    {children}
                </div>
            </main>
            <Footer />
            {
                mode === 'dark'
                    ?
                    <style jsx global>{`
                        :root {
                            --primary: #050505;
                            --secondary: #353535;
                            --optional: #f5f5f5;
                            --accent: #00ffff;
                            --wrong: #ff0000;
                        
                            --transparent-primary: #05050550;
                            --transparent-secondary: #35353550;
                            --transparent-optional: #f5f5f550;
                            --transparent-accent: #00ffff50;
                            --transparent-wrong: #ff555550;
                        
                            --transparent-primary-95: #05050595;
                            --transparent-secondary-95: #35353595;
                            --transparent-optional-95: #f5f5f595;
                            
                            --invert: 1;
                        
                        }
                      `}
                    </style>
                    :
                    <style jsx global>{`
                        :root {
                        
                            --primary: #f5f5f5;
                            --secondary: #f0f0f0;
                            --optional: #050505;
                            --accent: #000555;
                            --wrong: #ff5555;
                        
                            --transparent-primary: #f5f5f550;
                            --transparent-secondary: #f0f0f050;
                            --transparent-optional: #05050550;
                            --transparent-accent: #00ffff50;
                            --transparent-wrong: #ff555550;
                        
                            --transparent-primary-95: #f5f5f595;
                            --transparent-secondary-95: #f0f0f095;
                            --transparent-optional-95: #05050595;
                            
                            --invert: 0;
                        
                        }
                      `}
                    </style>
            }
        </div>
    )

}

export default Wrapper
