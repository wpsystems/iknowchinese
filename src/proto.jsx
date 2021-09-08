import React, { useState } from 'react';
import { Card, Container, Image, Header, Embed, Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import logo from './logo.svg';
import logo1_1 from './lesson 1.1 logo.png';
import logo1_2 from './lesson 1.2 logo.png';
import logo1_3 from './lesson 1.3 logo.png';
import logo2 from './lesson 2 logo.png';
import cantoneseSong1_1logo from './lesson 1.1 cantonese song logo.png';
import mandarinSong1_1logo from './lesson 1.1 mandarin song logo.png';
import cantoneseSong1_2logo from './lesson 1.2 cantonese song logo.png';
import mandarinSong1_2logo from './lesson 1.2 mandarin song logo.png';
import cantoneseSong1_3logo from './lesson 1.3 cantonese song logo.png';
import mandarinSong1_3logo from './lesson 1.3 mandarin song logo.png';
import cantoneseSong2logo from './lesson 2 cantonese song logo.png';
import mandarinSong2logo from './lesson 2 mandarin song logo.png';

// <iframe width="882" height="496" src="https://www.youtube.com/embed/-5eRva9cKxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

const lesson = [
    {
        image: logo1_1,
        cantoneseSong: "-5eRva9cKxg",
        cantoneseSongLogo: cantoneseSong1_1logo,
        mandarinSong: "AO4IGsk4_iY",
        mandarinSongLogo: mandarinSong1_1logo,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        header: "第 1.1 課",
        description: "人"
    },
    {
        image: logo1_2,
        cantoneseSong: "Acr5j5lszPM",
        cantoneseSongLogo: cantoneseSong1_2logo,
        mandarinSong: "NTiRGxrqj_0",
        mandarinSongLogo: mandarinSong1_2logo,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.2.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.2.sb3',
        header: "第 1.2 課",
        description: "我"
    },
    {
        image: logo1_3,
        cantoneseSong: "oPLtoCZBxys",
        cantoneseSongLogo: cantoneseSong1_3logo,
        mandarinSong: "AZ0Hn4wyLek",
        mandarinSongLogo: mandarinSong1_3logo,
        // link: 'https://wpsystems.xyz:12000/embed.html?project_url=wpsystems.github.io/scratch/hello.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.3.sb3',
        header: "第 1.3 課",
        description: "一二三"
    },

    {
        image: logo2,
        cantoneseSong: "r_7wVggjGuk",
        cantoneseSongLogo: cantoneseSong2logo,
        mandarinSong: "uuMpYwwFzR8",
        mandarinSongLogo: mandarinSong2logo,
        // link: 'https://wpsystems.xyz:12000/embed.html?project_url=wpsystems.github.io/scratch/hello.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson2.sb3',
        header: "第 2 課",
        description: "上下"
    },

]

const Proto = () => {

    const [playUnit, setPlayUnit] = useState(null);
    

    const Unit = ({unit, key}) => {
        /*
        <a href={unit.link}>
                <Image src={unit.image} wrapped ui={false} />
            </a> 
            <Image onClick={() => setPlay(true)} src={unit.image} wrapped ui={false} />
        */
        return (
        <Card>
            <Card.Content>
                <Card.Header>{unit.header}</Card.Header>
                <Card.Description>
                    {unit.description}
                </Card.Description>
            </Card.Content>
            <Image onClick={() => setPlayUnit(unit)} src={unit.image} wrapped ui={false} />
            <Header as='h5'>
                廣東話歌
            </Header>
            <Embed  
                    id={unit.cantoneseSong}
                    placeholder={unit.cantoneseSongLogo}
                    source='youtube'
                    iframe={{
                        allowFullScreen: "true",
                      }}
                />

            <Header as='h5'>
                普通話歌
            </Header>
            <Embed  
                    id={unit.mandarinSong}
                    placeholder={unit.mandarinSongLogo}
                    source='youtube'
                    iframe={{
                        allowFullScreen: "true",
                      }}
                />
        </Card>
        )
    }



    if (playUnit !== null) {
        
        return (
            <Container>
                <Button icon onClick={() => setPlayUnit(null)}>
                    <Icon name='chevron left' />
                </Button>
                <Embed
                    placeholder={playUnit.image}
                    
                    // url='https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/hello.sb3'
                    url={playUnit.link}
                    iframe={{
                        allowFullScreen: "true",
                        allowtransparency: "true",
                        frameborder: "0",
                        scrolling:"no",
                      }}
                />
            </Container>
        )
    }


    
    
    return (
        <Container>
            <Container textAlign='right'>
                <Button onClick={() => window.open('https://dev.d6t1v0dpbupz4.amplifyapp.com')}>
                    溫習課本App
                </Button>
            </Container>
            
            <Card.Group stackable={true}>
                {lesson.map((unit, index) => <Unit key={index} unit={unit}/>)}
            </Card.Group>
        </Container>
    )
}



export default Proto;