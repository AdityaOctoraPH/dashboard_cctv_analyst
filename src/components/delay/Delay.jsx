import React from 'react'

import './delay.css'

const Delay = props => {
    return (
        <div class="container p-4">
  <div class="fa-radio">
    <input type="radio" id="radio1" name="radio-status" value=""/>
    <label for="radio1" class="text-green">{props.title1}</label>
  </div>
  <div class="fa-radio">
    <input type="radio" id="radio2" name="radio-status" value=""/>
    <label for="radio2" class="text-green">{props.title2}</label>
  </div>
  <div class="fa-radio">
    <input type="radio" id="radio3" name="radio-status" value=""/>
    <label for="radio3" class="text-green">{props.title3}</label>
  </div>
</div>
    )
}

export default Delay
