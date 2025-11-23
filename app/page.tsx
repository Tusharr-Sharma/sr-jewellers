// pages/index.tsx
import Header from '../components/header';
import Hero from '../components/hero';
import Features from '../components/features';
import FeaturedProducts from '../components/featuredProducts';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <FeaturedProducts />
      <Footer />
    </>
  );
}
