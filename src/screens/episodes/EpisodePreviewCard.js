import {EpisodeStyles} from "../../components/styled";
import {Link} from "react-router-dom";
import React from "react";

export function EpisodePreviewCard(props) {
    return <EpisodeStyles as={Link} to={`./${props.episode.id}`}>
        <h3>{props.episode.title}</h3>
        <small>season {props.episode.season}</small>
        <p>{props.episode.body}</p>
    </EpisodeStyles>;
}