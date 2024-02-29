import Footer from '@/components/Footer.tsx';
import Header from '@/components/Header.tsx';
import Hero from '@/components/Hero.tsx';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
