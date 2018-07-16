import * as React from 'react';
import {ITestTaskJSON} from '../Models';

export interface IProps extends ITestTaskJSON {
    testTaskSolution: (testTaskData: ITestTaskJSON) => void;
}

const TestTaskButton: React.SFC<IProps> = (props: IProps) => {

    const handleClick = (e: React.SyntheticEvent<any>) => {
        e.preventDefault();
        const testTaskData: ITestTaskJSON = {
            taskId: props.taskId,
            solutionId: props.solutionId,
            solutionValue: props.solutionValue
        };
        props.testTaskSolution(testTaskData);
    };

    return (
        <button onClick={handleClick}>Отправить</button>
    )
};

export default TestTaskButton;