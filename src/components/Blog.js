import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from '@material-ui/icons/Fa';
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Blog() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [allStories, setAllStories] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getStories = () => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mannimendiratta"
    )
      .then(res => res.json())
      .then(data => {
        console.log(data.items);
        setAllStories(data.items);
      });
  };

  useEffect(() => {
    getStories();
  }, []);

  const createCardComponents = () => {
    return allStories.map(story => {
      return (
        <Card className={classes.root}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={story.title}
            subheader={story.pubDate}
          />
          <CardMedia
            className={classes.media}
            // image={story.thumbnail}
            src={story.thumbnail}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {story.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites"></IconButton>
            <IconButton aria-label="share" href={story.link}>
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>Extra text here</Typography>
            </CardContent>
          </Collapse>
        </Card>
      );
    });
  };

  return <section id="blog">{createCardComponents()}</section>;
}