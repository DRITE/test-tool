import {connect} from 'react-redux';
import {changeSolutionValue} from '../Actions/ActionCreators'
import App from '../App';
import {bindActionCreators} from 'redux';


export const mapStateToProps = (store) => {
    return {
        solutionValue: store.solutionValue,
    }
};

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({changeSolutionValue}, dispatch)
};


export let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
