import {
  SourceNodesArgs,
  GatsbyNode,
} from 'gatsby'

// -----------------------------------------------------------------------------

import {
  key     as metadataKey,
  payload as metadataPayload,
} from './src/data/metadata'

// -----------------------------------------------------------------------------

const createNode = (args: SourceNodesArgs, name: string, data: any) => {
  args.actions.createNode({
    ...data,
    ...{
      id: args.createNodeId(name),
      parent: null,
      children: [],
      internal: {
        type: 'data' + name,
        content: JSON.stringify(data),
        contentDigest: args.createContentDigest(data)
      }
    }
  })
}

// -----------------------------------------------------------------------------

export const sourceNodes: GatsbyNode['sourceNodes'] = (args) => {
  // site metadata -------------------------------------------------------------
  createNode(args, metadataKey, metadataPayload)

  // content -------------------------------------------------------------------
  const content = {
    posts: [
      { id: 1, description: `Hello world!` },
      { id: 2, description: `Second post!` },
    ],
  }

  createNode(args, 'Content', content)

  // createNode({
  //   ...data,
  //   ...{
  //     id: args.createNodeId('data'),
  //     parent: null,
  //     children: [],
  //     internal: {
  //       type: 'dataData',
  //       content: JSON.stringify(data),
  //       contentDigest: args.createContentDigest(data)
  //     }
  //   }
  // })

  // loop through data and create Gatsby nodes
  // data.posts.forEach(post =>
  //   createNode({
  //     ...post,
  //     id: createNodeId(`${NODE_TYPE}-${post.id}`),
  //     parent: null,
  //     children: [],
  //     internal: {
  //       type: NODE_TYPE,
  //       content: JSON.stringify(post),
  //       contentDigest: createContentDigest(post),
  //     },
  //   })
  // )
}
