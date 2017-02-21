/**
 * Created by superman on 2016/12/14.
 */
import * as types from '../types.js';
import {fetchData} from '../api';

const state = {
  data: [],
};

const actions = {
  setData(context,data){
    fetchData(data)
    .then(res => {
      context.commit([types.SET_DATA], res)
    });
  },

  clear(context){
    context.commit([types.CLEAN_DATA])
  }
};

const mutations = {

  [types.SET_DATA](state, data){
    state.data = data;
  },

  [types.CLEAN_DATA](state){
    state.data = [];
  },

};


export default {
  state,
  mutations,
  actions
}
