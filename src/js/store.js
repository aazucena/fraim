
import { createStore } from 'framework7';
import moment from 'moment'


const store = createStore({
  state: {
    mediaFiles: [
      {
        path: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
        date_created: moment().format('YYYY-MM-DD'),
        favorite: false,
      },
      {
        path: "https://assets.zoom.us/images/en-us/desktop/generic/virtual-background-green-screen-example.jpg",
        date_created: moment().format('YYYY-MM-DD'),
        favorite: true,
      }
    ]
  },
  getters: {
    mediaFiles({ state }) {
      return state.mediaFiles
    }
  },
  actions: {
    getMediaFile({ state }, { path }) {
      var tmp = state.mediaFiles
      var index = state.mediaFiles.findIndex((file) => file.path === path)
      return tmp[index]
    },
    addMediaFile({ state }, { path }) {
      let mediaFile = {
        path,
        date_created: moment().format('YYYY-MM-DD'),
        favorite: false,
      }
      state.mediaFiles = [...state.mediaFiles, mediaFile]
    },
    deleteMediaFile({ state }, { index }) {
      console.log("🚀 ~ file: store.js ~ line 41 ~ deleteMediaFile ~ index", index)
      state.mediaFiles.splice(index, 1)
      console.log("🚀 ~ file: store.js ~ line 43 ~ deleteMediaFile ~ state.mediaFiles", state.mediaFiles)
      state.mediaFiles = state.mediaFiles
    },
    toggleFavorite({ state }, { path }) {
      var tmp = state.mediaFiles
      var index = state.mediaFiles.findIndex((file) => file.path === path)
      tmp[index].favorite = !tmp[index].favorite
      state.mediaFiles = tmp
    },
  },
})
export default store;
