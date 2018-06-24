import * as React from 'react';

export interface IProps{
    updateSolutionValue: any
}



export default class SolutionArea extends React.Component<IProps>{

    // shouldComponentUpdate(nextProps: IProps){
    //     return this.props.text !== nextProps.text;
    // }

    onChange = (newValue) => {
        this.props.updateSolutionValue(newValue)
    };

    render(){
        return(
            <textarea onChange={this.onChange}>
                {/*{this.props.text}*/}
            </textarea>
        )
    }
}