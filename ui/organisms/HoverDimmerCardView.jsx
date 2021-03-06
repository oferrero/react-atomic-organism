import React, {Component} from 'react'; 
import {
    assign,
    mixClass,
    Dimmer
} from 'react-atomic-molecule';
import {
    CardView
} from '../../src/index';

class HoverDimmerCardView extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            show: false
        };
    }

    handleEnter()
    {
        this.setState({show:true});
    }

    handleLeave()
    {
        this.setState({show:false});
    }

    render()
    {
        const {children, className, style, ...others} = this.props;
        let dimmer;
        let newStyle = assign({},style);
        if (this.state.show) {
            dimmer = <Dimmer show={true}>{children}</Dimmer>;
            newStyle.cursor='pointer';
        }
        let classes = mixClass(
            className,
            {
                'blurring dimmable dimmed': this.state.show
            }
        );
        return (
            <CardView {...others}
                className={classes}
                style={newStyle}
                onMouseEnter={this.handleEnter.bind(this)}            
                onMouseLeave={this.handleLeave.bind(this)}            
                dimmer={dimmer}
            />
        );
    }
}

export default HoverDimmerCardView;
