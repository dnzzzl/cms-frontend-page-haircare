# An Incremental Static Regeneration Blog Using Next.js and WordPress

This example showcases Next.js's [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) feature allowing for Server Side Rendering of the frontend UI, while using [WordPress](https://wordpress.org) as the data source.

We chose this decoupled architecture in order to take advantage of the practicality that Wordpress offers for content publishing, structure, and built-in SQL database. Allowing for a simplified workflow when adding content.
Having Next.js as the frontend framework allows for continous development and integration pipeline. 

## Live Site

### [elizabeth-haircare.com](elizabeth-haircare.com)

## Deployment process
Our choices reflect our minimal scalability needs as well as a priority on lowering platform costs in order to achieve the goal of exposing our website for a minimal cost.

AWS Lightsail was chosen for Wordpress hosting on account of its simplicity and affordability, having a decoupled architechture means that our backed and frontend are not dependent on each other which allows for choosing a simple solution at launch with the ability to scale or pivot completely while keeping api compatibility managed by Wordpress REST API or GraphQL endpoint with the use of the plugin WPGraphQL.

Vercel is the go-to platform for easy deployment and integration with Next.js applications. The platform handles the build process, hosting of the generated static files, caching and other logic that is abstracted away, pricing for small projects is free.

### Related examples

- [AgilityCMS](/examples/cms-agilitycms)
- [Builder.io](/examples/cms-builder-io)
- [ButterCMS](/examples/cms-buttercms)
- [Contentful](/examples/cms-contentful)
- [Cosmic](/examples/cms-cosmic)
- [DatoCMS](/examples/cms-datocms)
- [DotCMS](/examples/cms-dotcms)
- [Drupal](/examples/cms-drupal)
- [Enterspeed](/examples/cms-enterspeed)
- [Ghost](/examples/cms-ghost)
- [GraphCMS](/examples/cms-graphcms)
- [Kontent](/examples/cms-kontent-ai)
- [Prepr](/examples/cms-prepr)
- [Prismic](/examples/cms-prismic)
- [Sanity](/examples/cms-sanity)
- [Sitefinity](/examples/cms-sitefinity)
- [Storyblok](/examples/cms-storyblok)
- [TakeShape](/examples/cms-takeshape)
- [Umbraco heartcore](/examples/cms-umbraco-heartcore)
- [Webiny](/examples/cms-webiny)
- [Blog Starter](/examples/blog-starter)
- [WordPress](/examples/cms-wordpress)


## Configuration

### Step 1. Preparation of your WordPress site

First, we need a WordPress site. There are many solutions for WordPress hosting, such as [WP Engine](https://wpengine.com/) and [WordPress.com](https://wordpress.com/), we have opted for Amazon Lightsail which offers a Wordpress platform.

Once the site is ready, you'll need to install needed plugins for your use case, [WPGraphQL](https://www.wpgraphql.com/) plugin is essential for integrating a GraphQL API to your WordPress site, which we'll use to query data from the backend.

Our domain is configured with a wordpress. subdomain that points to the Wordpress installation.

#### GraphQL

The [WPGraphQL](https://www.wpgraphql.com/) plugin also gives you access to a GraphQL IDE directly from your WordPress Admin, allowing you to inspect and tailor your requests to the graphql API endpoint.

![WPGraphiQL page](./docs/wp-graphiql.png)

### Step 2. Populate Content

Inside our WordPress admin is where our content is published, we go to **Posts** and start adding new posts, **Products** for products, **Media**, etc. Leveraging wordpress for its ease of use allows for continous publishing with no further changes to the UI.

When you’re done, make sure to **Publish** the posts.

> **Note:** Only **published** posts and public fields will be rendered by the app unless [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode) is enabled.

### Step 3. Set up environment variables

Configure local environment variables within the frontend deployment environment.

```bash
WORDPRESS_API_URL=...

# Only required if you want to enable preview mode
# WORDPRESS_AUTH_REFRESH_TOKEN=
# WORDPRESS_PREVIEW_SECRET=
```

### Step 4. Profit

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example).

When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

Our blog should be up and running on [elizabeth-haircare.com](elizabeth-haircare.com)

### Upcoming/pending changes: Add authentication for Preview Mode (Optional)

**This step is optional.** By default, the blog will work with public posts from your WordPress site. Private content such as unpublished posts and private fields cannot be retrieved. To have access to unpublished posts you'll need to set up authentication.

To add [authentication to WPGraphQL](https://docs.wpgraphql.com/guides/authentication-and-authorization/), first you need to add the [WPGraphQL JWT plugin](https://github.com/wp-graphql/wp-graphql-jwt-authentication) to your WordPress Admin following the same process you used to add the WPGraphQL plugin.

> Adding the WPGraphQL JWT plugin will disable your GraphQL API until you add a JWT secret ([GitHub issue](https://github.com/wp-graphql/wp-graphql-jwt-authentication/issues/91)).

Once that's done, you'll need to access the WordPress filesystem to add the secret required to validate JWT tokens. We recommend using SFTP — the instructions vary depending on your hosting provider. For example:

- [SFTP guide for WP Engine](https://wpengine.com/support/sftp/)
- [SFTP guide for WordPress.com](https://wordpress.com/support/sftp/)

Once you have SFTP access, open `wp-config.php` and add a secret for your JWT:

```php
define( 'GRAPHQL_JWT_AUTH_SECRET_KEY', 'YOUR_STRONG_SECRET' );
```

> You can read more about this in the documentation for [WPGraphQL JWT Authentication](https://docs.wpgraphql.com/extensions/wpgraphql-jwt-authentication/).

Now, you need to get a **refresh token** to make authenticated requests with GraphQL. Make the following GraphQL mutation to your WordPress site from the GraphQL IDE (See notes about WPGraphiQL from earlier). Replace `your_username` with the **username** of a user with the `Administrator` role, and `your_password` with the user's password.

```graphql
mutation Login {
  login(
    input: {
      clientMutationId: "uniqueId"
      password: "your_password"
      username: "your_username"
    }
  ) {
    refreshToken
  }
}
```

Copy the `refreshToken` returned by the mutation, then open `.env.local`, and make the following changes:

- Uncomment `WORDPRESS_AUTH_REFRESH_TOKEN` and set it to be the `refreshToken` you just received.
- Uncomment `WORDPRESS_PREVIEW_SECRET` and set it to be any random string (ideally URL friendly).

Your `.env.local` file should look like this:

```bash
WORDPRESS_API_URL=...

# Only required if you want to enable preview mode
WORDPRESS_AUTH_REFRESH_TOKEN=...
WORDPRESS_PREVIEW_SECRET=...
```