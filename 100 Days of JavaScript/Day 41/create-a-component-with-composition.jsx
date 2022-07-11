const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }

        <ChildComponent />
        { /* Change code above this line */ }
      </div>
    );
  }
};
//https://www.freecodecamp.org/learn/front-end-development-libraries/react/create-a-component-with-composition