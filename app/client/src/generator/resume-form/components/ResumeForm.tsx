import styled from 'styled-components'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ProfileSection, EducationSection } from './default-sections'
import { colors, sizes } from '../../../common/theme'

const Container = styled.section`
  width: ${sizes.formSection.width};
  background: ${colors.gray2};
  height: calc(${sizes.formSection.height} - ${sizes.footer.height});
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  overflow: scroll;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export function ResumeForm() {
  return (
    <Container>
      <Form>
        <Switch>
          <Route exact path="/generator/basics" component={ProfileSection} />
          <Route
            exact
            path="/generator/education"
            component={EducationSection}
          />
          <Route exact path="/generator/experience" />
          <Route exact path="/generator/skills" />
          <Route exact path="/generator/projects" />
          <Route exact path="/generator/awards" />
          <Route path="*">
            <Redirect to="/generator/basics" />
          </Route>
        </Switch>
      </Form>
    </Container>
  )
}
