import * as React from 'react';

import SolutionContainer from './Containers/SolutionContainer';

export interface IState {

    // solutionValue: string;
}

export interface IProps {
    taskText: string;
    solutionValue: string;

}

const App = () => {

    // props: IProps;
    // state: IState;

    // constructor(props: IProps) {
    //     super(props);
    //     this.state = {
    //         solutionValue: ''
    //     }
    // }

    // onSolutionChange(){
    //     this.setState()
    // }

    {
        return (
            <div>
                <h1>TEST #2</h1>
                <SolutionContainer />
            </div>
        )
    }


};

export default App;