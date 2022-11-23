
import { createStore } from 'framework7';
import moment from 'moment'
import { v4 as uuid } from 'uuid';


const store = createStore({
  state: {
    mediaFiles: [
      {
        id: uuid(),
        path: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
        date_created: moment().format('YYYY-MM-DD'),
        favorite: false,
        deleted: false,
      },
      {
        id: uuid(),
        path: "https://assets.zoom.us/images/en-us/desktop/generic/virtual-background-green-screen-example.jpg",
        date_created: moment().format('YYYY-MM-DD'),
        favorite: true,
        deleted: false,
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
        id: uuid(),
        path,
        date_created: moment().format('YYYY-MM-DD'),
        favorite: false,
        deleted: false,
      }
      state.mediaFiles = [...state.mediaFiles, mediaFile]
    },
    deleteMediaFile({ state }, { id }) {
      var tmp = state.mediaFiles
      var index = state.mediaFiles.findIndex((file) => file.id === id)
      tmp[index].deleted = true
      console.log("🚀 ~ file: store.js ~ line 51 ~ deleteMediaFile ~ tmp", tmp)
      console.log("🚀 ~ file: store.js ~ line 53 ~ deleteMediaFile ~ tmp.filter(({ deleted }) => deleted === false)", tmp.filter(({ deleted }) => deleted === false))
      state.mediaFiles = tmp.filter(({ deleted }) => deleted === false)
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
