import React from 'react'
import Layout from 'components/Layout'
import { useTags } from 'components/useTags';

function Money() {
  const {tags, setTags} = useTags()
  return (
    <Layout>
      {tags.map(tag=>
      <li key={tag}>{tag}</li>)}
    </Layout>
  );
}

export default Money