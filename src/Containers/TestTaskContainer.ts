import {connect} from 'react-redux';
import {testTaskSolution} from '../Actions/ActionCreators';
import {ITestTaskJSON} from '../Models';
import TestTask from '../Components/TestTask';

export const mapStateToProps = (store) => {
    return {
        solutionValue: store.fetchTask.solutionValue,
        taskId: store.fetchTask.taskId,
        solutionId: store.fetchTask.solutionId,
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        testTaskSolution: (testTaskData: ITestTaskJSON) => dispatch(testTaskSolution(testTaskData))
    }
};

const TestTaskContainer = connect(mapStateToProps, mapDispatchToProps)(TestTask);

export default TestTaskContainer;