import * as React from 'react';

export interface IProps{
    text: string;
}

export default class SolutionArea extends React.Component<IProps>{

    shouldComponentUpdate(nextProps: IProps){
        return this.props.text !== nextProps.text;
    }

    render(){
        return(
            <textarea>
                {this.props.text}
            </textarea>
        )
    }
}