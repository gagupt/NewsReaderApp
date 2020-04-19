import React from 'react';
import PropTypes from 'prop-types';
import getSiteHostname from 'utils/getSiteHostname';
import getArticleLink from 'utils/getArticleLink';

import { Item, Card, Image, Content, Title, Source } from './styles';

const GridItem = ({ author, title, description,url,urlToImage,publishedAt,content})  => {
  return (
    <a href={url} target="_blank" rel="nofollow noreferrer nofollow">
      <Item>
        <Card>
          <Image src={urlToImage} />
          <Content>
            <Title>{title}</Title>
          </Content>
        </Card>
      </Item>
    </a>
  );
};

GridItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default GridItem;
