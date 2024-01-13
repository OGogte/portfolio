import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";
import './App.css';
function ProjectCard({ data }) {

    const scroll = {
        initial: {
            x: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeOut",
            },
        }
    }


    return (
        <a href={data.url} target="_blank" rel="noreferrer">
            <motion.div className="ProjectCard"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={scroll}
                whileHover={{
                    y: -10,
                    transition: {
                        duration: 0.5,
                    },
                }}>
                <Card sx={{ maxWidth: 512, background: 'black', margin: '30px 30px', boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={data.img}
                        title="green iguana"
                        component='div'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="white" fontWeight={600}>
                            {data.title}
                        </Typography>
                        <Typography variant="body2" color="white">
                            {data.text}
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button size="small" href={data.url} target="_blank" rel="noreferrer">Github</Button>
                        <Typography variant="body2" color="#00ff00">
                            {data.tools}
                        </Typography>
                    </CardActions>
                </Card>
            </motion.div>
        </a>
    );
}

export default ProjectCard;