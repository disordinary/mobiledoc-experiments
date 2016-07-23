import Card from './card';


export default class WhakapapaSnowReport extends Card {
  constructor( ) {
    super();
    this.name = 'whakapapa-snow-report';
    this.previewName = 'whakapapa forecast';
    this.previewImage = 'http://www.mtruapehu.com/content/plugins/tradegallery/thumbnail/1U0A2931.jpg';
    //this.resizeMode  = this.resizeModeEnum.full_width_only;
  }

  render( { env , options , payload } ) {
     super.render( { env , options , payload } ); 
    
    env.postModel.renderNode.element.style.width="480px";
    let holder = document.createElement("div");
    
    holder.innerHTML = '<link href="//www.snow-forecast.com/stylesheets/feed.css" media="screen" rel="stylesheet" type="text/css" /><div id="wf-weatherfeed"><iframe style="overflow:hidden;border:none;" allowtransparency="true" height="272" width="469" src="//www.snow-forecast.com/resorts/Whakapapa/forecasts/feed/top/m" scrolling="no" frameborder="0" marginwidth="0" marginheight="0"><p>Your browser does not support iframes.</p></iframe><div id="wf-link"><a href="http://www.snow-forecast.com/"><img alt="Snow Forecast" src="//www.snow-forecast.com/images/feed/snowlogo-150.png"/></a><p id="cmt">View detailed snow forecast for <a href="http://www.snow-forecast.com/resorts/Whakapapa/6day/mid">Whakapapa</a> at:<br /><a href="http://www.snow-forecast.com/"><strong>snow-forecast.com</strong></a></p><div style="clear: both;"></div></div></div>';



    return holder;
  }
}



