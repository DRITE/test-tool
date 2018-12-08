import * as React from 'react';

import {
    SolutionAreaContainer,
    TestTaskButtonContainer,
    ResultAreaContainer,
    ClearSolutionButtonContainer
} from './Containers/index';

export interface IProps {
    taskTitle: string;
    taskText: string;
}

const App: React.SFC<IProps> = (props: IProps) => {
    return (
        <div>
            <h2>{props.taskTitle}</h2>
            <p>{props.taskText}</p>
            <SolutionAreaContainer/>
            <div className={'task_buttons_class'}>
                <TestTaskButtonContainer/>
                <ClearSolutionButtonContainer/>
            </div>
            <ResultAreaContainer/>
        </div>
    )
};


export default App;