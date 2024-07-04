import { About } from './About/About';
import { SharedLayout } from './App.styled';
import { DigitalExperience } from './DigitalExperience/DigitalExperience';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { LatestProjects } from './LatestProjects/LatestProjects';
import { Specializations } from './Specializations/Specializations';

export const App = () => {
  return (
    <>
      <SharedLayout>
        <Header />
        <Hero />
        <Specializations />
        <About />
        <LatestProjects />
        <DigitalExperience />
      </SharedLayout>
    </>
  );
};
