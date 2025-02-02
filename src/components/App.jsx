import { About } from './About/About';
import { SharedLayout } from './App.styled';
import { DigitalExperience } from './DigitalExperience/DigitalExperience';
import { Footer } from './Footer/Footer';
import { Gallery } from './Gallery/Gallery';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { LatestProjects } from './LatestProjects/LatestProjects';
import { MeetTeam } from './MeetTeam/MeetTeam';
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
        <MeetTeam />
        <Gallery />
        <Footer />
      </SharedLayout>
    </>
  );
};
