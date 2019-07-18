import React from 'react';
import Presenter from './presenter';

class Container extends React.Component {
    state = {
        iconLoading: false
    }
    render() {
        const { iconLoading } = this.state;
        const { iconLoadingStart } = this;
        return <Presenter iconLoadingStart={iconLoadingStart} iconLoading={iconLoading} />
    }

    iconLoadingStart = () => {
        this.setState({
            iconLoading: true
        })
    }
}

export default Container;