import { EventsBinder } from '../core/event/index'

export default function (Glide, Components) {
  let Binder = new EventsBinder()

  return {
    init () {
      if (Glide.settings.keyboard) {
        this.bind()
      }
    },

    bind () {
      Binder.on('keyup', document, this.press)
    },

    unbind () {
      Binder.on('keyup', document, this.press)
    },

    press (event) {
      if (event.keyCode === 39) {
        Components.Run.make('>')
      }
      if (event.keyCode === 37) {
        Components.Run.make('<')
      }
    }
  }
}
