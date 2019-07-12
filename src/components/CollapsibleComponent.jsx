import React, { Component } from 'react';



class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  componentDidMount() {
    this.setState({ isOpen: this.props.startOpen });
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
      <Card>

      <Button onClick={this.toggle} block outline className="text-left card-header btn-link">
      {this.props.header}</Button>

      <Collapse isOpen={this.state.isOpen}>
          <CardBody>{this.props.children}</CardBody>
      </Collapse>
      </Card>
      </div>
    );
  }
}
