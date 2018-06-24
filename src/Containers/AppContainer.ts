import {connect} from 'react-redux';
import {changeSolution} from '../Actions/ActionCreators';
import SolutionArea from '../Components/SolutionArea';


const mapDispatchToProps = (dispatch) => {
    return {
        updateSolutionValue: (value) => {
            dispatch(changeSolution(value))
        }
    }
};

export let AppContainer = connect(mapDispatchToProps)(SolutionArea);
