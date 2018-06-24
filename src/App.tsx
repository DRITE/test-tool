import * as React from 'react';

import TaskTitle from './Components/TaskTitle';
import SolutionArea from './Components/SolutionArea';

export interface IState {

    // solutionValue: string;
}

export interface IProps {
    taskText: string;
    solutionValue: string;

}

export class App extends React.Component<IProps, IState> {

    props: IProps;
    state: IState;

    // constructor(props: IProps) {
    //     super(props);
    //     this.state = {
    //         solutionValue: ''
    //     }
    // }

    // onSolutionChange(){
    //     this.setState()
    // }

    render() {
        return (
            <div>
                <TaskTitle text={this.props.taskText}/>
                <p>Введите своё решение ниже:</p>
                <SolutionArea />
            </div>
        )
    }


}