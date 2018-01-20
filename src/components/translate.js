import transformer from '../transformer/index'

export default function (Glide, Components, Events) {
  const TRANSLATE = {
    /**
     * Gets value of translate.
     *
     * @param  {Integer} value
     * @return {String}
     */
    get (value) {
      return `translate3d(${-1 * value}px, 0px, 0px)`
    },

    /**
     * Sets value of translate.
     *
     * @param {HTMLElement} el
     * @return {self}
     */
    set (value) {
      let transform = transformer(Glide, Components).mutate(value)

      Components.Html.wrapper.style.transform = this.get(transform)

      return this
    }
  }

  /**
   * Set new translate value on:
   * - standard moving on index change
   * - on jumping from offset transition at start and end edges in `carousel` type
   */
  Events.listen(['move'], (context) => {
    let width = Components.Sizes.slideWidth
    let length = Components.Html.slides.length

    if (Components.Run.isOffset('<')) {
      Components.Transition.after(() => {
        Events.emit('translate.jump')

        TRANSLATE.set(width * (length - 1))
      })

      return TRANSLATE.set(-width)
    }

    if (Components.Run.isOffset('>')) {
      Components.Transition.after(() => {
        Events.emit('translate.jump')

        TRANSLATE.set(0)
      })

      return TRANSLATE.set(width * length)
    }

    return TRANSLATE.set(context.movement)
  })

  return TRANSLATE
}
