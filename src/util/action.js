import { initGlobalState} from 'qiankun';
// 初始化 state
const actions = initGlobalState({});
actions.onGlobalStateChange((state, prev) => {
    //主应用的监听
    console.log('主应用的监听')
    console.log(prev,state);
});

export default {
    set(state){
        actions.setGlobalState(state)
    }
}
