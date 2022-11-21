
import { createStore } from 'framework7';
import moment from 'moment'


const store = createStore({
  state: {
    mediaFiles: [
      {
        path: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
        date_created: moment().format('YY-MM-DD'),
      }
    ]
  },
  getters: {
    mediaFiles({ state }) {
      return state.mediaFiles;
    }
  },
  actions: {
    addMediaFile({ state }, { path }) {
      let mediaFile = {
        path,
        date_created: moment().format('YY-MM-DD')
      }
      console.log("🚀 ~ file: store.js ~ line 18 ~ addMediaFile ~ mediaFile", mediaFile)
      state.mediaFiles = [...state.mediaFiles, mediaFile]
      console.log("🚀 ~ file: store.js ~ line 23 ~ addMediaFile ~ state.mediaFiles", state.mediaFiles)
    },
    deleteMediaFile({ state }, { path }) {
      
      var tmp = state.mediaFiles
      var index = state.mediaFiles.findIndex((file) => file.path === path)
      delete tmp[index]
      state.mediaFiles = tmp
    },
  },
})
export default store;
