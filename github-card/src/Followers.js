import React from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle } from 'reactstrap';



function Followers(props) {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

    return (
      <>
      {props.followers.map(follower => (
                  <div key={follower.id}>
                    <CardImg top width="100%" src={follower.avatar_url} />
                    <CardSubtitle>UserName: {follower.login}</CardSubtitle>
                    <CardSubtitle>
                      Following: {follower.following_url.length}
                    </CardSubtitle>
                    <CardSubtitle>
                      Followers: {follower.followers_url.length}
                    </CardSubtitle>
                  </div>
                ))}
      </>
    );

}

export default Followers;