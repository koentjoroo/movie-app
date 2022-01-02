import type { NextPage } from 'next'
import { PageLayout } from '~/components/layout'

const Home: NextPage = () => {
  return (
    <PageLayout title="Movie App">
      <div className="container mx-auto">Index Page</div>
    </PageLayout>
  )
}

export default Home
