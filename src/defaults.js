export default {
  /**
   * Type of the slides movements. Available types:
   * `slider` - Rewinds slider to the start/end when it reaches first or last slide.
   * `carousel` - Changes slides without starting over when it reaches first or last slide.
   * `slideshow` - Changes slides with fade effect.
   *
   * @type {String}
   */
  type: 'slider',

  /**
   * Direction of the slider movements. Available modes:
   * `horizontal` - Move slider on X axis.
   * `vertical` - Move slider on Y axis.
   *
   * @type {String}
   */
  mode: 'horizontal',

  /**
   * Start at specifed slide zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,

  /**
   * Number of slides visible on viewport.
   *
   * @type {Number}
   */
  perView: 1,

  /**
   * Focus currently active slide at specifed position in the track. Available inputs:
   * `center` - Current slide will be always focused at the center of track.
   * `(1,2,3...)` - Current slide will be focused at the specifed position number.
   *
   * @type {String|Number}
   */
  focusAt: 'center',

  /**
   * Change slides after specifed interval.
   * Use false for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: 4000,

  /**
   * Stop autoplay on mouseover.
   *
   * @type {Boolean}
   */
  hoverpause: true,

  /**
   * Allow for changing slides with keyboard left and right arrows.
   *
   * @type {Boolean}
   */
  keyboard: true,

  /**
   * Minimal swipe distance needed to change slide, `false` for turning off touch.
   *
   * @type {Number}
   */
  swipeThreshold: 80,

  /**
   * Minimal mouse drag distance needed to change slide, `false` for turning off mouse drag.
   *
   * @type {Number}
   */
  dragThreshold: 120,

  /**
   * A maximum number of slides to whom movement is maked on swiping or dragging, `false` for unlimited.
   *
   * @type {Number}
   */
  perTouch: false,

  /**
   * Moving ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.75,

  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,

  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,

  /**
   * Easing function for animation.
   *
   * @type {String}
   */
  animationTimingFunc: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',

  /**
   * Optimalize resize and swipemove events. Call at most once per every wait in milliseconds.
   *
   * @type {Number}
   */
  debounce: 200,

  /**
   * Set height of the slider based on current slide content.
   *
   * @type {Boolean}
   */
  autoheight: false,

  /**
   * Distance value of the next and previous viewports which have to be
   * peeked in current view. Can be number, percentage or pixels.
   * Left and right peeking can be setup separetly with a
   * object `{ left: 100, right: 100 }`
   *
   * @type {Number|String|Object}
   */
  peek: 0,

  /**
   * List of internally used Html classes.
   *
   * @type {Object}
   */
  classes: {
    horizontal: 'glide--horizontal',
    vertical: 'glide--vertical',
    slider: 'glide--slider',
    carousel: 'glide--carousel',
    slideshow: 'glide--slideshow',
    dragging: 'glide--dragging',
    cloneSlide: 'glide__slide--clone',
    activeSlide: 'glide__slide--active',
    disabledArrow: 'glide__arrow--disabled',
    activeBullet: 'glide__bullet--active'
  },

  /**
   * Additional slider extension components.
   *
   * @type {Object}
   */
  extensions: {},

  /**
   * Callback that fires before a slider initialization.
   *
   * @param {Object} event
   */
  beforeInit (event) {},

  /**
   * Callback that fires after a slider initialization.
   *
   * @param {Object} event
   */
  afterInit (event) {},

  /**
   * Callback that fires before a slide change.
   *
   * @param {Object} event
   */
  beforeTransition (event) {},

  /**
   * Callback that fires during changing of a slide.
   *
   * @param {Object} event
   */
  duringTransition (event) {},

  /**
   * Callback that fires after a slide change.
   *
   * @param {Object} event
   */
  afterTransition (event) {},

  /**
   * Callback that fires on start of touch/drag interaction.
   *
   * @param {Object} event
   */
  swipeStart (event) {},

  /**
   * Callback that fires during touch/drag interaction.
   *
   * @param {Object} event
   */
  swipeMove (event) {},

  /**
   * Callback that fires on end of touch/drag interaction.
   *
   * @param {Object} event
   */
  swipeEnd (event) {}
}
