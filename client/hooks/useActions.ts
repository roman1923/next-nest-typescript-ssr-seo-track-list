import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreator from "../store/actions-creators";


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreator, dispatch)
}