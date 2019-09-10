import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

import './index.scss';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map(child => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map(child => {
            const { label } = child.props;
            const className =
              label === activeTab
                ? 'tab-content-item tab-content-item-active'
                : 'tab-content-item tab-content-item-inactive';
            // if (child.props.label !== activeTab) return undefined;
            return (
              <div className={className} key={label}>
                {child.props.children}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
