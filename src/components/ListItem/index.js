import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import getSiteHostname from 'utils/getSiteHostname';
import getArticleLink, { HN_USER, HN_ITEM } from 'utils/getArticleLink';

import { Item, Title, Host, ExternalLink, Description, CommentLink, DescriptionDetails } from './styles';

const ListItem = ({ author, title, description,url,urlToImage,publishedAt,content})  => {


  return (
    <Item>
      <ExternalLink href={url} rel="nofollow noreferrer noopener" target="_blank">
        <Title>
          {title} 
        </Title>
      </ExternalLink>
      <DescriptionDetails>
        {description}
      </DescriptionDetails>
      <Description>
     
        <CommentLink rel="nofollow noreferrer noopener" target="_blank">
          {author},
        </CommentLink>{' '}
        <TimeAgo date={publishedAt} />{' | '}
        
      </Description>
    </Item>
  );
};

ListItem.propTypes = {
  by: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default ListItem;
