import React from 'react';
import Presenter from './presenter'

class Container extends React.Component {
    state = {
        iconLoading: false
    }
    render() {
        const { enterIconLoading } = this;
        const { iconLoading
        } = this.state;
        return <Presenter iconLoading={iconLoading} enterIconLoading={enterIconLoading} />
    }

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    };
}

export default Container;