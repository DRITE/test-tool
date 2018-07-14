import {connect} from 'react-redux';
import {changeSolutionValue} from '../Actions/ActionCreators';
import SolutionArea from '../Components/SolutionArea';


export const mapStateToProps = (store) => {
    return {
        solutionValue: store.fetchTask.solutionValue,
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        changeSolutionValue: (value: string) => dispatch(changeSolutionValue(value))
    }
};

const SolutionAreaContainer = connect(mapStateToProps, mapDispatchToProps)(SolutionArea);

export default SolutionAreaContainer;