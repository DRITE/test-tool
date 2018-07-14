import * as React from 'react';

import {
    SolutionAreaContainer,
    TestTaskButtonContainer,
    ResultAreaContainer
} from './Containers';

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
            <TestTaskButtonContainer/>
            <ResultAreaContainer/>
        </div>
    )
};


export default App;