/**
 *
 * Checkbox
 *
 */

import React from 'react';

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      size: event.target.value
    });
    this.props.handleChangeSubmit(event.target.name,event.target.value);
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Newest First"
                checked={this.state.size === "Newest First"}
                onChange={this.handleChange}
              />
              Newest First
            </label>
          </li>

          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Giá từ Cao đến Thấp"
                checked={this.state.size === "Giá từ Cao đến Thấp"}
                onChange={this.handleChange}
              />
              Giá từ Cao đến Thấp
            </label>
          </li>

          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Giá từ Thấp đến Cao"
                checked={this.state.size === "Giá từ Thấp đến Cao"}
                onChange={this.handleChange}
              />
              Giá từ Thấp đến Cao
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Radio;
