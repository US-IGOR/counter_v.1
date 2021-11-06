import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {DisplayControl} from "./components/counter/displayControl/DisplayControl";
import {Setting} from "./components/counter/setting/Setting";
import {ButtonCompon} from "./components/commonСomponents/ButtonCompon/ButtonCompon";
import s from "./components/counter/displayControl/displayControl.module.css";

function App() {


    let [state, setState] = useState([{
        max: 0,
        min: 0,
        displayValue: 0
    }])

    let [settingState, setSettingState] = useState([{
        minSettingState: 0,
        maxSettingState: 0,
        clicked: false
    }])


//handlers

    const settingMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        settingState[0].minSettingState = Number(e.currentTarget.value)
        settingState[0].clicked = false
        setSettingState([...settingState])
    }
    const settingMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        settingState[0].maxSettingState = Number(e.currentTarget.value)
        settingState[0].clicked = false
        setSettingState([...settingState])
    }

//error checking,disabling

    const maxValue = state[0].min === state[0].max

    const errorMinValue = settingState[0].minSettingState < 0 ||
        settingState[0].maxSettingState < 0 ||
        settingState[0].minSettingState > settingState[0].maxSettingState


//CallBacks

    const set = () => {
        state[0].min = settingState[0].minSettingState
        state[0].max = settingState[0].maxSettingState
        state[0].displayValue = state[0].min
        settingState[0].clicked = true


        setSettingState(settingState)
        setState([...state])

    }

    const inc = () => {
        if (state[0].min < state[0].max) {
            state[0].displayValue = ++state[0].min
            setState([...state])
        } else {
            setState([...state])
        }
    }

    const res = () => {
        state[0].min = settingState[0].minSettingState
        state[0].displayValue = state[0].min
        setState([...state])
    }


    return (
        <div className="App">
            <div>


                <DisplayControl
                    inc={inc}
                    res={res}
                    displayValue={state[0].displayValue}
                    maxValue={maxValue}
                    error={errorMinValue}


                />
                <Setting
                    settingMinHandler={settingMinHandler}
                    settingMaxHandler={settingMaxHandler}
                    valueMinInput={settingState[0].minSettingState}
                    valueMaxInput={settingState[0].maxSettingState}
                    clicked={settingState[0].clicked}
                    set={set}
                    error={errorMinValue}
                />


            </div>
        </div>
    );
}


export default App;
