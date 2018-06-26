import * as React from 'react';
import TaskTitle from './TaskTitle';
import SolutionContainer from '../Containers/SolutionContainer';

// export interface IProps {
//     solutionValue: string,
// }


const SolutionArea = () => {

    // shouldComponentUpdate(nextProps: IProps){
    //     return this.props.text !== nextProps.text;
    // }


    return (
        <div>
            <TaskTitle/>
            <SolutionContainer/>
        </div>
    )

};
export default SolutionArea;


