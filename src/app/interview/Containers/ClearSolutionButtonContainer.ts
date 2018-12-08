import {connect} from 'react-redux';
import {clearSolutionAndResultAreas} from '../Actions/ActionCreators';
import ClearSolutionButton from '../Components/ClearSolutionButton';

export const mapStateToProps = (store) => {
    return {
        result: store.fetchTask.result
    }
};

export const mapDispatchToProps = (dispatch) => {
    return{
        clearSolutionAndResultAreas: () => dispatch(clearSolutionAndResultAreas())
    }
};

const ClearSolutionButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ClearSolutionButton);

export default ClearSolutionButtonContainer;