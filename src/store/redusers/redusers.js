import { combineReducers } from "redux";
import newsReduser from './newsReduser';
import statReduser from './statReduser';
import settingsReduser from './settingsReduser';
import testsReduser from './testsReduser';

let redusers = combineReducers({
    news: newsReduser,
    stat: statReduser,
    tests: testsReduser,
    setting: settingsReduser,
});

export default redusers