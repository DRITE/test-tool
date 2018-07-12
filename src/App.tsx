import * as React from 'react';

import SolutionContainer from './Containers/SolutionContainer';

export interface IProps {
    taskTitle: string;
    taskText: string;
}

const App: React.SFC<IProps> = (props: IProps) => {
    return (
        <div>
            <h2>{props.taskTitle}</h2>
            <p>{props.taskText}</p>
            <SolutionContainer/>
        </div>
    )
};


export default App;