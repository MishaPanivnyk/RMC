import { About } from './About/About';
import { SharedLayout } from './App.styled';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Specializations } from './Specializations/Specializations';

export const App = () => {
  return (
    <>
      <SharedLayout>
        <Header />
        <Hero />
        <Specializations />
        <About />
      </SharedLayout>
    </>
  );
};
