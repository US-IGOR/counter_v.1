import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {DisplayControl} from "./components/counter/displayControl/DisplayControl";
import {Setting} from "./components/counter/setting/Setting";


function App() {


    let [state, setState] = useState([{
        max: 0,
        min: 0,
        displayValue:0

    }])

    let [settingState, setSettingState] = useState([{
        minSettingState: 0,
        maxSettingState: 0
    }])


    const settingMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        settingState[0].minSettingState = Number(e.currentTarget.value)
    }
    const settingMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        settingState[0].maxSettingState = Number(e.currentTarget.value)
    }
    const set = () => {
        state[0].min = settingState[0].minSettingState
        state[0].max = settingState[0].maxSettingState
        state[0].displayValue=state[0].min


        setSettingState(settingState)
        setState([...state])

    }


    const inc = () => {


       if (state[0].min < state[0].max+1) {state[0].displayValue=state[0].min
           state[0].min++;} else return
        setState([...state])
    }


    return (
        <div className="App">
            <div>


                <DisplayControl
                    inc={inc}
                    min={state[0].min}
                    max={state[0].max}
                    displayValue={state[0].displayValue}


                />
                <Setting
                    settingMinHandler={settingMinHandler}
                    settingMaxHandler={settingMaxHandler}
                    set={set}
                                   />

            </div>
        </div>
    );
}


export default App;
