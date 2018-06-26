import {connect} from 'react-redux';
import {changeSolutionValue} from '../Actions/ActionCreators';
import Solution from '../Components/Solution';


export const mapStateToProps = (store) => {
    return {
        solutionValue: store.solutionValue,
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        changeSolutionValue: (value: string) => dispatch(changeSolutionValue(value))
    }
}

const SolutionContainer = connect(mapStateToProps, mapDispatchToProps)(Solution);

export default SolutionContainer;