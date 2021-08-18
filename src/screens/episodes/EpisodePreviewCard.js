import {EpisodeStyles} from "../../components/styled";
import {Link} from "react-router-dom";
import React from "react";
import {keyframes} from "styled-components";

export function EpisodesListLoader() {
    return (
        <>
            <EpisodePreviewLoaderCard/>
            <EpisodePreviewLoaderCard/>
            <EpisodePreviewLoaderCard/>
            <EpisodePreviewLoaderCard/>
            <EpisodePreviewLoaderCard/>
            <EpisodePreviewLoaderCard/>
            <EpisodePreviewLoaderCard/>
        </>
    )
}

const loading = keyframes`
  0% {
    background-color: rgba(88, 108, 121, 0.15);
  }
  50% {
    background-color: rgba(88, 108, 121, 0.2);
  }
  100% {
    background-color: rgba(88, 108, 121, 0.15);
  }
`

export function EpisodePreviewLoaderCard() {
    return (
        <div css={`
          width: 350px;
          height: 188px;
          background-color: rgba(255, 255, 255, 0.1);
          padding: 1rem;
          margin: 16px;
          animation: ${loading} 2s ease-in infinite;
        `}>
            <div
                css={`
                  width: 200px;
                  height: 20px;
                  background-color: #202b38;
                  margin-bottom: 24px;
                `}
            />
            <div
                css={`
                  width: 200px;
                  height: 20px;
                  background-color: #202b38;
                  margin-bottom: 24px;
                `}
            />
            <div
                css={`
                  width: calc(350px - 2rem);
                  height: 20px;
                  background-color: #202b38;
                  margin-bottom: 4px;
                `}
            />
            <div
                css={`
                  width: calc(350px - 2rem);
                  height: 20px;
                  background-color: #202b38;
                  margin-bottom: 4px;
                `}
            />
            <div
                css={`
                  width: calc(100px - 2rem);
                  height: 20px;
                  background-color: #202b38;
                `}
            />
        </div>
    )
}

export function EpisodePreviewCard(props) {
    return (
        <EpisodeStyles as={Link} to={`./${props.episode.id}`}>
            <h3>{props.episode.title}</h3>
            <small>season {props.episode.season}</small>
            <p>{props.episode.synopsis}</p>
        </EpisodeStyles>
    );
}

