import React, { useState } from 'react';
import { Card, Container, Image, Header, Embed, Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import logo from './logo.svg';
import logo1_1 from './lesson 1.1 logo.png';
import logo1_2 from './lesson 1.2 logo.png';
import logo1_3 from './lesson 1.3 logo.png';
import logo2_1 from './lesson 2.1 logo.png';
import logo2_2 from './lesson 2.2 logo.png';
import logo2_3 from './lesson 2.3 logo.png';
import logo3_1 from './lesson 3.1 logo.png';
import cantoneseSong1_1logo from './lesson 1.1 cantonese song logo.png';
import mandarinSong1_1logo from './lesson 1.1 mandarin song logo.png';
import cantoneseSong1_2logo from './lesson 1.2 cantonese song logo.png';
import mandarinSong1_2logo from './lesson 1.2 mandarin song logo.png';
import cantoneseSong1_3logo from './lesson 1.3 cantonese song logo.png';
import mandarinSong1_3logo from './lesson 1.3 mandarin song logo.png';
import cantoneseSong2logo from './lesson 2 cantonese song logo.png';
import mandarinSong2logo from './lesson 2 mandarin song logo.png';
import cantoneseSong3_1logo from './lesson 3.1 cantonese song logo.png';
import mandarinSong3_1logo from './lesson 3.1 mandarin song logo.png';
import logotccsa1_1 from './tccsa1.1logo.png';
import logotccsa1_2 from './tccsa1.2logo.png';
import logotccsa1_3 from './tccsa1.3logo.png';
import logotccsa3_1 from './tccsa3.1logo.png';
import logotccsa3_2 from './tccsa3.2logo.png';
import logotccsa4_1 from './tccsa4.1logo.png';
import logotccsa4_2 from './tccsa4.2logo.png';
import logotccsa5_1 from './tccsa5.1logo.png';
import logotccsa5_2 from './tccsa5.2logo.png';
import logotccsa6_1 from './tccsa6.1logo.png';
import logotccsa6_2 from './tccsa6.2logo.png';
import logotccsa7_1 from './tccsa7.1logo.png';
import logotccsa7_2 from './tccsa7.2logo.png';
import logotccsa8_1 from './tccsa8.1logo.png';
import logotccsa8_2 from './tccsa8.2logo.png';
import logotccsa9_1 from './tccsa9.1logo.png';
import logotccsa9_2 from './tccsa9.2logo.png';
import logotccsaCalendar from './tccsaCalendarlogo.png';
import logotccsaSignin from './tccsaSigninlogo.png';
import cantoneseSongtccsa1_1logo from './cantoneseSongtccsa1_1logo.png';
import cantoneseSongtccsa1_2logo from './cantoneseSongtccsa1_2logo.png';
import cantoneseSongtccsa1_3logo from './cantoneseSongtccsa1_3logo.png';
import cantoneseSongtccsa4_1logo from './cantoneseSongtccsa4_1logo.png';
import cantoneseSongtccsa6_1logo from './cantoneseSongtccsa6_1logo.png';
import cantoneseSongtccsa6_2logo from './cantoneseSongtccsa6_2logo.png';
import cantoneseSongtccsa8_2logo from './cantoneseSongtccsa8_2logo.png';

// <iframe width="882" height="496" src="https://www.youtube.com/embed/-5eRva9cKxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

const lesson = [
    {
        image: logotccsaSignin,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsaSignin.sb3',
        header: "多華會 TCCSA Sign In",
        description: ""
    },
    {
        image: logotccsaCalendar,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsaCalendar.sb3',
        header: "多華會 TCCSA Calendar",
        description: ""
    },
    {
        image: logotccsa1_1,
        cantoneseSong: "H6qLfGuxB5U",
        cantoneseSongLogo: cantoneseSongtccsa1_1logo,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa1.sb3',
        header: "多華會 TCCSA Lesson 1",
        description: ""
    },
    {
        image: logotccsa1_2,
        cantoneseSong: "2jPMAqvxr1c",
        cantoneseSongLogo: cantoneseSongtccsa1_2logo,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa2.1.sb3',
        header: "多華會 TCCSA Lesson 2.1",
        description: ""
    },
    {
        image: logotccsa1_3,
        cantoneseSong: "oDJ0hQ4fYQc",
        cantoneseSongLogo: cantoneseSongtccsa1_3logo,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa2.2.sb3',
        header: "多華會 TCCSA Lesson 2.2",
        description: ""
    },
    {
        image: logotccsa3_1,
        // cantoneseSong: "2jPMAqvxr1c",
        // cantoneseSongLogo: cantoneseSongtccsa1_2logo,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa3.1.sb3',
        header: "多華會 TCCSA Lesson 3.1",
        description: ""
    },
    {
        image: logotccsa3_2,
        // cantoneseSong: "oDJ0hQ4fYQc",
        // cantoneseSongLogo: cantoneseSongtccsa1_3logo,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa3.2.sb3',
        header: "多華會 TCCSA Lesson 3.2",
        description: ""
    },
    {
        image: logotccsa4_2,
        cantoneseSong: "C2nYuWDerCA",
        cantoneseSongLogo: cantoneseSongtccsa4_1logo,
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa4.2.sb3',
        header: "多華會 TCCSA Lesson 4.1",
        description: ""
    },
    {
        image: logotccsa4_1,
        // cantoneseSong: "oDJ0hQ4fYQc",
        // cantoneseSongLogo: cantoneseSongtccsa1_3logo,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa4.1.sb3',
        header: "多華會 TCCSA Lesson 4.2",
        description: ""
    },
    {
        image: logotccsa5_1,
        // cantoneseSong: "8dPxRtW-A2k",
        // cantoneseSongLogo: cantoneseSongtccsa5_1logo,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa5.1.sb3',
        header: "多華會 TCCSA Lesson 5.1",
        description: ""
    },
    {
        image: logotccsa5_2,
        // cantoneseSong: "xutOySp0daI",
        //cantoneseSongLogo: cantoneseSongtccsa5_2logo,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa5.2.sb3',
        header: "多華會 TCCSA Lesson 5.2",
        description: ""
    },
    {
        image: logotccsa6_1,
        cantoneseSong: "8dPxRtW-A2k",
        cantoneseSongLogo: cantoneseSongtccsa6_1logo,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa6.1.sb3',
        header: "多華會 TCCSA Lesson 6.1",
        description: ""
    },
    {
        image: logotccsa6_2,
        cantoneseSong: "xutOySp0daI",
        cantoneseSongLogo: cantoneseSongtccsa6_2logo,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa6.2.sb3',
        header: "多華會 TCCSA Lesson 6.2",
        description: ""
    },
    {
        image: logotccsa7_1,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa7.1.sb3',
        header: "多華會 TCCSA Lesson 7.1",
        description: ""
    },
    {
        image: logotccsa7_2,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa7.2.sb3',
        header: "多華會 TCCSA Lesson 7.2",
        description: ""
    },
    {
        image: logotccsa8_1,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa8.1.sb3',
        header: "多華會 TCCSA Lesson 8.1",
        description: ""
    },
    {
        image: logotccsa8_2,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa8.2.sb3',
        cantoneseSong: "t5WssaMqIhE",
        cantoneseSongLogo: cantoneseSongtccsa8_2logo,
        header: "多華會 TCCSA Lesson 8.2",
        description: ""
    },
    {
        image: logotccsa9_1,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa9.1.sb3',
        header: "多華會 TCCSA Lesson 9.1",
        description: ""
    },
    {
        image: logotccsa9_2,
        // link: 'https://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/tccsa9.2.sb3',
        header: "多華會 TCCSA Lesson 9.2",
        description: ""
    },
    
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
        image: logo2_1,
        cantoneseSong: "r_7wVggjGuk",
        cantoneseSongLogo: cantoneseSong2logo,
        mandarinSong: "76K1142zPao",
        mandarinSongLogo: mandarinSong2logo,
        // link: 'https://wpsystems.xyz:12000/embed.html?project_url=wpsystems.github.io/scratch/hello.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson2.1.sb3',
        header: "第 2.1 課",
        description: "上下"
    },

    {
        image: logo2_2,
        
        // link: 'https://wpsystems.xyz:12000/embed.html?project_url=wpsystems.github.io/scratch/hello.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson2.2.sb3',
        header: "第 2.2 課",
        description: "上下 車，飛機，船"
    },

    {
        image: logo2_3,
        
        // link: 'https://wpsystems.xyz:12000/embed.html?project_url=wpsystems.github.io/scratch/hello.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson2.3.sb3',
        header: "第 2.3 課",
        description: "上下 課，學；早上，上下午，上海，..."
    },

    {
        image: logo3_1,
        
        // link: 'https://wpsystems.xyz:12000/embed.html?project_url=wpsystems.github.io/scratch/hello.sb3',
        link: 'https://wpsystems.github.io/scratch-gui/build/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson3.1.sb3',
        header: "第 3.1 課",
        description: "中，中國，中文",
        cantoneseSong: "GEXGHCU5BDg",
        cantoneseSongLogo: cantoneseSong3_1logo,
        mandarinSong: "dZUVGtSouCc",
        mandarinSongLogo: mandarinSong3_1logo,
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
                <Image onClick={() => setPlayUnit(unit)} src={unit.image} wrapped ui={true}/>
            </Card.Content>
            
            {
                typeof unit.cantoneseSong !== 'undefined' &&
            <>
            
            <Header as='h5'>
                
            </Header>
            <Embed  
                    id={unit.cantoneseSong}
                    placeholder={unit.cantoneseSongLogo}
                    source='youtube'
                    iframe={{
                        allowFullScreen: "true",
                      }}
                />
            </>
            }

            {
                typeof unit.mandarinSong !== 'undefined' &&
            <>

            <Header as='h5'>
                
            </Header>
            <Embed  
                    id={unit.mandarinSong}
                    placeholder={unit.mandarinSongLogo}
                    source='youtube'
                    iframe={{
                        allowFullScreen: "true",
                      }}
                />
            </>
            }
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