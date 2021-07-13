import React, { useState } from 'react';
import { Card, Container, Image, Embed } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import logo from './logo.svg';
import start from './start.png';

const lesson = [
    {
        image: logo,
        link: 'http://wpsystems.xyz:12000/embed.html?project_url=wpsystems.github.io/scratch/hello.sb3',
        header: "Part 1",
        description: "My description"
    },
    {
        image: logo,
        link: 'http://wpsystems.xyz:12000/embed.html?project_url=wpsystems.github.io/scratch/hello.sb3',
        header: "Part 2",
        description: "My description"
    },
    {
        image: logo,
        link: 'http://wpsystems.xyz:12000/embed.html?project_url=wpsystems.github.io/scratch/hello.sb3',
        header: "Part 3",
        description: "My description"
    },

]

const Proto = () => {

    const [play, setPlay] = useState(false);

    const Unit = ({unit, key}) => {
        /*
        <a href={unit.link}>
                <Image src={unit.image} wrapped ui={false} />
            </a> 
            <Image onClick={() => setPlay(true)} src={unit.image} wrapped ui={false} />
        */
        return (
        <Card>
            <Embed
                    placeholder={start}
                    
                    url='http://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/lesson1.1.sb3'
                    iframe={{
                        allowFullScreen: "true",
                        allowtransparency: "true",
                        frameborder: "0",
                        scrolling:"no",
                      }}
                />
                
            <Card.Content>
                <Card.Header>{unit.header}</Card.Header>
                <Card.Meta>Unit {key}</Card.Meta>
                <Card.Description>
                    {unit.description}
                </Card.Description>
            </Card.Content>
        </Card>
        )
    }



    if (play) {
        /*
        icon='right circle arrow'
                    placeholder={logo}
        */
        return (
            <Container>
                <Embed
                    placeholder={start}
                    
                    url='http://wpsystems.xyz:12000/embed.html?autoplay&project_url=wpsystems.github.io/scratch/hello.sb3'
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
            <Card.Group stackable={true}>
                {lesson.map((unit, index) => <Unit key={index} unit={unit}/>)}
            </Card.Group>
        </Container>
    )
}



export default Proto;