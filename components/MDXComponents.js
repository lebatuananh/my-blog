/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'
import PostLayout from '@/layouts/PostLayout'
import ActivityLayout from '@/layouts/ActivityLayout'
import AuthorLayout from '@/layouts/AuthorLayout'
import ListLayout from '@/layouts/ListLayout'
import SnippetsLayout from '@/layouts/SnippetsLayout'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    switch (layout) {
      case 'PostLayout':
        return <PostLayout {...rest} />
      case 'ActivityLayout':
        return <ActivityLayout {...rest} />
      case 'AuthorLayout':
        return <AuthorLayout {...rest} />
      case 'ListLayout':
        return <ListLayout {...rest} />
      case 'SnippetsLayout':
        return <SnippetsLayout {...rest} />
      default:
        return <PostLayout {...rest} />
    }
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
