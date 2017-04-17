import React from 'react';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                    name : 'Basavaraj G',
                    job: 'Senior Software Engineer',
                  };
  }
  render() {
    return (
      <div>
        <Header headers={this.props.headers} />
        Name: <span>{' ' + this.state.name}</span>
        Job : <span>{' ' + this.state.job}</span>
      </div>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='header'>
          <h1>About Me</h1>
          <h1>Education</h1>
          <h1>Work Experience</h1>
          <h1>Skills</h1>
          <h1>Certifications</h1>

      </div>
    );
  }
}
export default Resume;
