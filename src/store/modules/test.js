
import * as types from '../types.js';
import {fetchData} from '../api';

const state = {
  testdata: {}
};

const actions = {
  getData({commit}, data){
    fetchData(data)
    .then(res => commit(types.SET_DATA, res));
  },

  clear({
    commit
  }){
    commit([types.CLEAN_DATA])
  }
};

const mutations = {

  [types.SET_DATA](state, data){
    state.testdata = data;
  },

  [types.CLEAN_DATA](state){
    state.testdata = [];
  },

};


export default {
  state,
  mutations,
  actions
}
