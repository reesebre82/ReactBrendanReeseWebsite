import Header from './components/Sections/Header/Header'
import SnapSection from './components/SnapSection'
import ScrollSnapScroller from './components/ScrollSnapScroller'
import ProjectContainer from './components/Sections/ProjectsSection/ProjectContainer';
import SkillsContainer from './components/Sections/SkillsSection/SkillsContainer';

function App() {

  return (
    <div className="Container">
      <ScrollSnapScroller>
        {/* Front page */}
        <SnapSection bgColor="cornflowerblue">
          <Header />
        </SnapSection>

        {/* Projects Page */}
        <SnapSection bgColor="white">
          <ProjectContainer />
        </SnapSection>

        {/* Skills Page */}
        <SnapSection bgColor="white">
          <SkillsContainer/>
        </SnapSection>
      </ScrollSnapScroller>
    </div>
  );
}

export default App;
